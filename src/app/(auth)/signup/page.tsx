'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CustomFormField } from '@/features/loginSignup/composite/FormField'
import { FormScheme } from '@/validation/loginValid'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SignUp = () => {
  const router = useRouter()
  const handleRoute = (url: string) => router.push(url)

  const form = useForm<z.infer<typeof FormScheme>>({
    resolver: zodResolver(FormScheme),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = () => handleRoute('/timeline')

  return (
    <Form {...form}>
      <div className="h-screen flex items-center justify-center">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/4 h-fit flex flex-col gap-6 items-center">
          <p>Sign up to Code Snippets Platform</p>

          <CustomFormField
            control={form.control}
            fieldName="username"
            formLabel="username"
            renderChildren={(field) => <Input type="text" placeholder="username" {...field} />}
          />

          <CustomFormField
            control={form.control}
            fieldName="email"
            formLabel="email"
            renderChildren={(field) => <Input type="text" placeholder="email" {...field} />}
          />

          <CustomFormField
            control={form.control}
            fieldName="password"
            formLabel="password"
            renderChildren={(field) => <Input type="text" placeholder="password" {...field} />}
          />

          <Button type="submit" className="w-2/3 cursor-pointer">
            Sign up
          </Button>
        </form>
      </div>
    </Form>
  )
}

export default SignUp
