import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

interface MDXImageProps {
  src: string
  alt?: string
}

type CustomImageProps = Omit<ImageProps, 'src'> & {
  src: string | MDXImageProps
}

const Image = ({ src, width = 400, height = 300, alt, ...rest }: CustomImageProps) => {
  const isAnimated = (s: string) => /\.(gif|apng)$/i.test(s)
  // Handle case where src is an object from MDX processing
  if (typeof src === 'object' && src !== null && 'src' in src) {
    const { src: imageSrc, alt: mdxAlt } = src
    const full = `${basePath || ''}${imageSrc}`
    const animated = isAnimated(imageSrc)
    return <NextImage src={full} alt={mdxAlt || alt || ''} width={width} height={height} unoptimized={animated} {...rest} />
  }

  // Handle normal string src
  const full = `${basePath || ''}${src}`
  const animated = typeof src === 'string' && isAnimated(src)
  return <NextImage src={full} alt={alt || ''} width={width} height={height} unoptimized={animated} {...rest} />
}

export default Image
