const rawApiBase = import.meta.env.VITE_API_BASE

if (!rawApiBase) {
  throw new Error('Missing required environment variable: VITE_API_BASE')
}

export const API_BASE = rawApiBase.replace(/\/+$/, '')
