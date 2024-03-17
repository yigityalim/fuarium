import React from 'react'
import { list } from '@vercel/blob'

export default async function Page() {
    const files = await list()
    return (
        <div>
            <h1>Files</h1>
            <ul>
                {files.blobs.map((file) => (
                    <li key={file.url}>{file.url}</li>
                ))}
            </ul>
        </div>
    )
}
