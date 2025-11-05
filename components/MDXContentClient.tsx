'use client'
import { useMDXComponent } from 'pliny/mdx-components'
import { components as sharedComponents } from './MDXComponents'

export default function MDXContentClient({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component components={sharedComponents as Record<string, React.ComponentType<unknown>>} />
}
