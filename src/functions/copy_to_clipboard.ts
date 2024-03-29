import { useQuasar } from 'quasar';

export async function copy_to_clipboard(text: string) {
  useQuasar().notify({
    message: 'Copied to clipboard',
  });
  await navigator.clipboard.writeText(text);
}
