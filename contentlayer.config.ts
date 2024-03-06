import { defineDocumentType, makeSource, type ComputedFields } from 'contentlayer/source-files'

const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
} as ComputedFields satisfies ComputedFields

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `post/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
    },
    computedFields,
}))

const Visa = defineDocumentType(() => ({
    name: 'Visa',
    filePathPattern: `visa/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the visa',
            required: true,
        },
        country: {
            type: 'string',
            description: 'The country of the visa',
            required: true,
        },
        href: {
            type: 'string',
            description: 'The href of the visa',
            required: true,
        },
        image: {
            type: 'string',
            description: 'The image of the visa',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The description of the visa',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the visa',
            required: true,
        },
        published: {
            type: 'boolean',
            description: 'The published status of the visa',
            required: true,
        },
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Visa],
})
