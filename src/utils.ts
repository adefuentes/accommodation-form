export function normalizeState<T extends Record<string, unknown>>(
  data: T[],
  typeId = "id",
): Record<string, T> {
  const items: Record<string, T> = {};
  data.forEach((d) => {
    items[String(d[typeId])] = d;
  });

  return items;
}

export const unNormalizeState = <T>(data: Record<string, T>): T[] =>
  data ? Object.values(data) : [];

export const blobToString = (file: Blob) =>
  new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result as string;
      resolve(base64);
    };
  });

export const getImageDimensions = (src: string) =>
  new Promise<{ width: number; height: number }>((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      resolve({ width: image.width, height: image.height });
    };
  });

export const cn = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");
