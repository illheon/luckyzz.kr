import localFont from 'next/font/local';

// PP Lettra Mono - Primary font for English text
export const ppLettraMono = localFont({
  src: [
    {
      path: '../public/fonts/PPLettraMono-Ultralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPLettraMono-UltralightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPLettraMono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPLettraMono-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPLettraMono-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPLettraMono-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPLettraMono-Ultrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPLettraMono-UltraboldItalic.otf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-pp-lettra-mono',
  display: 'swap',
});

// Arita Buri - Korean serif font
export const aritaBuri = localFont({
  src: [
    {
      path: '../public/fonts/AritaBuriKR-HairLine.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/AritaBuriKR-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/AritaBuriKR-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/AritaBuriKR-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/AritaBuriKR-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-arita-buri',
  display: 'swap',
});

// Mulche - Display font
export const mulche = localFont({
  src: '../public/fonts/Mulche Solid Bold.otf',
  variable: '--font-mulche',
  weight: '700',
  display: 'swap',
});
