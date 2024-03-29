import { Notify } from 'quasar';

export async function copy_to_clipboard(text: string) {
  Notify.create({
    message: 'Copied to clipboard',
  });
  await navigator.clipboard.writeText(text);
}
