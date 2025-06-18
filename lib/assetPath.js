export default function assetPath(path = '') {
  // Ensure leading slash so concatenation works predictably
  if (!path.startsWith('/')) path = '/' + path

  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${prefix}${path}`
} 