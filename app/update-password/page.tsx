'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type UpdatePasswordFormValues = {
  password: string
  confirmPassword: string
}

export default function UpdatePasswordPage() {
  const [isReady, setIsReady] = useState(false)
  const [sessionValid, setSessionValid] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UpdatePasswordFormValues>({ defaultValues: { password: '', confirmPassword: '' } })

  function parseSessionFromUrl() {
    const searchParams = new URLSearchParams(window.location.search + window.location.hash.replace('#', '?'))
    const access_token = searchParams.get('access_token')
    const refresh_token = searchParams.get('refresh_token')
    const expires_in = searchParams.get('expires_in')
    const token_type = searchParams.get('token_type')

    if (!access_token || !refresh_token) {
      return null
    }

    return {
      access_token,
      refresh_token,
      expires_in: expires_in ? Number(expires_in) : undefined,
      token_type: token_type || undefined,
    }
  }

  useEffect(() => {
    async function restoreSession() {
      const sessionData = parseSessionFromUrl()

      if (sessionData) {
        await supabase.auth.setSession(sessionData)
      }

      const session = await supabase.auth.getSession()
      if (session.data.session?.user) {
        setSessionValid(true)
      } else {
        setMessage(
          'This page must be opened from the password recovery link sent to your email. If you did not receive it, request a new reset at /reset-password.',
        )
      }

      setIsReady(true)
    }

    restoreSession()
  }, [])

  async function onSubmit(values: UpdatePasswordFormValues) {
    setStatus('loading')
    setMessage(null)

    if (values.password !== values.confirmPassword) {
      setStatus('error')
      setMessage('Passwords do not match.')
      return
    }

    const { error } = await supabase.auth.updateUser({ password: values.password })

    if (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to update password. Please try again.')
      return
    }

    setStatus('success')
    setMessage('Your password has been updated successfully. You can now sign in with your new password.')
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-border bg-background/95 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Update password</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Choose a new password</h1>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-muted-foreground">
            Complete the password reset flow by setting a new password for your account.
          </p>
        </div>

        {!isReady ? (
          <div className="mt-10 text-center text-sm text-muted-foreground">Verifying reset link…</div>
        ) : !sessionValid ? (
          <div className="mt-10 space-y-4 rounded-xl border border-destructive/50 bg-destructive/10 p-6 text-sm text-destructive">
            <p>{message}</p>
            <Link href="/reset-password" className="font-medium text-primary underline">
              Request a new reset link
            </Link>
          </div>
        ) : (
          <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <label className="block text-sm font-medium text-foreground">
              New password
              <Input
                type="password"
                placeholder="New password"
                className="mt-2"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Use at least 8 characters' },
                })}
              />
            </label>
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}

            <label className="block text-sm font-medium text-foreground">
              Confirm new password
              <Input
                type="password"
                placeholder="Confirm password"
                className="mt-2"
                {...register('confirmPassword', {
                  required: 'Confirm your password',
                  validate: (value) => value === watch('password') || 'Passwords do not match',
                })}
              />
            </label>
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
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
              {status === 'loading' ? 'Updating password…' : 'Update password'}
            </Button>

            <p className="text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">
              If you still have issues, request another reset link.
            </p>
          </form>
        )}
      </div>
    </main>
  )
}
