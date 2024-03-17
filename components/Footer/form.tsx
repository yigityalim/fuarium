'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import React from 'react'

// ui
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { usePathname } from 'next/navigation'

export const formSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().min(1).email(),
    tel: z.string().min(1),
    message: z.string().min(1).max(500),
})

export type FormValues = z.infer<typeof formSchema>

export function ContactForm(): React.ReactElement {
    const pathname = usePathname()
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            tel: '',
            message: '',
        },
    })

    async function onSubmit(values: FormValues): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log(values)

        setTimeout(() => {
            form.reset()
        }, 2000)
    }

    if (pathname.includes('contact')) return <></>

    if (form.formState.isSubmitSuccessful) {
        return (
            <div className='flex h-[504px] w-full items-center justify-center'>
                <p className='text-start text-2xl font-medium'>Mesajınız başarıyla gönderildi.</p>
            </div>
        )
    }

    return (
        <>
            <h1 className='my-6 w-full text-start text-2xl font-bold'>Müşteri Formu</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ad Soyad</FormLabel>
                                <FormControl>
                                    <Input placeholder='Ad Soyad' {...field} />
                                </FormControl>
                                <FormDescription>Adınız ve soyadınızı giriniz.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-Posta</FormLabel>
                                <FormControl>
                                    <Input placeholder='E-Posta' {...field} />
                                </FormControl>
                                <FormDescription>E-posta adresinizi giriniz.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='tel'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefon</FormLabel>
                                <FormControl>
                                    <Input placeholder='Telefon' {...field} />
                                </FormControl>
                                <FormDescription>Telefon numaranızı giriniz.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mesaj</FormLabel>
                                <FormControl>
                                    <Textarea placeholder='Mesaj' {...field} />
                                </FormControl>
                                <FormDescription>Mesajınızı giriniz.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit' disabled={form.formState.isSubmitting} size='sm' className='w-full'>
                        {form.formState.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                    </Button>
                </form>
            </Form>
        </>
    )
}
