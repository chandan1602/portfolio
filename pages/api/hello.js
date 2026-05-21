// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { blogService } from "../../api"

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// Removed named export, not allowed in Next.js API routes