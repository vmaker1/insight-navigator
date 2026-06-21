import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { target } = req.body;

    const prompt = `
다음 분석 대상에 대해 기초 정보를 정리해 주세요.

분석 대상: ${target}

반드시 아래 JSON 형식으로만 답하세요.

{
  "summary": "대상에 대한 간단한 소개",
  "type": "기업/브랜드/행사/기관/프로젝트/서비스 중 하나",
  "industry": "관련 산업군",
  "coreValue": "핵심 가치",
  "keywords": ["키워드1", "키워드2", "키워드3"],
  "confidence": 70
}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    });

    const text = completion.choices[0].message.content;
    const discovery = JSON.parse(text);

    return res.status(200).json({ discovery });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "대상 분석 오류" });
  }
}