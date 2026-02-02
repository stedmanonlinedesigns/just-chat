import { NextResponse } from "next/server";
import { firebaseHelpers } from "@/app/utils/firebase";

export async function GET() {
    try {
        const messagesCollection = firebaseHelpers.getCollection('messages')
        const querySnapshot = await firebaseHelpers.getDocs(messagesCollection)

        return NextResponse.json({ data: querySnapshot, success: true }, { status: 200 })
    } catch (error) {
        console.error('There was an error:', error)
        return NextResponse.json({
            error: 'Failed to fetch messages.', success: false, ...(process.env.NODE_ENV === 'development' && {
                details: error instanceof Error ? error.message : 'Uknown error'
            })
        }, { status: 500 })
    }
}