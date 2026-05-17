'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type ResetPasswordFormValues = {
  email: string
}

export default function ResetPasswordPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({ defaultValues: { email: '' } })

  async function onSubmit(values: ResetPasswordFormValues) {
    setStatus('loading')
    setMessage(null)

    const redirectTo = `${window.location.origin}/update-password`
    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo,
    })

    if (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to send reset email. Please try again.')
      return
    }

    setStatus('success')
    setMessage(
      'If that email is registered, a password reset link has been sent. Please check your inbox.',
    )
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-border bg-background/95 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Password recovery</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Reset your FinanceGuy password</h1>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-muted-foreground">
            Enter the email address for your account and we’ll send a recovery link so you can choose a new password.
          </p>
        </div>

        <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-sm font-medium text-foreground">
            Email address
            <Input
              type="email"
              placeholder="you@example.com"
              className="mt-2"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
          </label>
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}

          {message ? (
            <div
              className={`rounded-md border px-4 py-3 text-sm ${
                status === 'error'
                  ? 'border-destructive/70 bg-destructive/10 text-destructive'
                  : 'border-primary/70 bg-primary/10 text-foreground'
              }`}
            >
              {message}
            </div>
          ) : null}

          <Button type="submit" disabled={status === 'loading'} className="w-full">
            {status === 'loading' ? 'Sending reset link...' : 'Send reset link'}
          </Button>

          <p className="text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">
            You will be redirected to /update-password after clicking the email link.
          </p>
        </form>
      </div>
    </main>
  )
}
