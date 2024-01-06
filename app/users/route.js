import User from "@/models/User"


// export async function GET() {
//     try {
//         const user = await User.findAll()
//         return Response.json({ user})
//     }
//     catch {
//         console.log({ message: 'data not found' });
//     }
// }


// pages/api/your_api_endpoint.js

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const data = req.body;
//       const record = await User.create(data);
//       res.json(record);
//     } catch (error) {
//       res.json({ error: error.message });
//     }
//   } else {
//     res.json({ error: 'Method not allowed' });
//   }
// }



export async function handler(req, res) {
  // if (req.method === 'POST') {
  //   try {
  //     const data = req.body;
  //     const record = await User.create(data);
  //     res.json(record);
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //     res.status(500).json({ error: 'Failed to create user.' });
  //   }
  // } else {
  //   res.status(405).json({ error: 'Method Not Allowed' });
  // }
}