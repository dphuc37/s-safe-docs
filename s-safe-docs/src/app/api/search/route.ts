import { createFromSource } from 'fumadocs-core/search/server';
import { source } from '@/lib/source';

// Bỏ dấu tiếng Việt khi lập chỉ mục và khi tìm, để gõ "bo dieu khien" vẫn ra "Bộ điều khiển".
const foldDiacritics = (raw: string) =>
  raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();

export const { GET } = createFromSource(source, {
  tokenizer: {
    language: 'vietnamese',
    normalizationCache: new Map(),
    tokenize: (raw: string) => foldDiacritics(raw).split(/[^a-z0-9]+/).filter(Boolean),
  },
});
