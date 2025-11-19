export function usePublicUrl(path?: string | null) {
  const config = useRuntimeConfig()

  let base = config.public.publicURL || '/' 

  base = base.replace(/\/\//g, '/')
  if (!path) return base

  base += path
  base = base.replace(/\/\//g, '/')
  return base
}
