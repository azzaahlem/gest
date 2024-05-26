import data from '@/app/lib/d'
import connectToDB from '@/app/lib/utils'
import user from '@/app/lib/models'
import { NextRequest,NextResponse } from 'next/server'

export const GET =  async () =>{
    const{user}=data
    await connectToDB()
    await user.deletMany()
    await user.insertMany(user)

    return NextRequest.json(
        {
            message:'azzza  ',
            user,
        }
    )
}