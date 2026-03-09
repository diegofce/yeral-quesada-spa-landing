import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

/**
 * Placeholder elegante para imágenes que se cargarán manualmente.
 */
interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  ratio?: 'cuadrado' | 'landscape' | 'portrait' | 'panorama';
}

export default function ImagePlaceholder({
  label = 'Imagen pendiente por configurar',
  className,
  ratio = 'landscape',
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center gap-3 overflow-hidden border border-dorado/25',
        ratio === 'cuadrado' && 'aspect-square',
        ratio === 'landscape' && 'aspect-video',
        ratio === 'portrait' && 'aspect-[3/4]',
        ratio === 'panorama' && 'aspect-[21/9]',
        className,
      )}
      style={{
        background:
          'linear-gradient(145deg, #F7F3EE 0%, #FDF6ED 35%, #F0EAE0 70%, #EDE4D8 100%)',
      }}
      role="img"
      aria-label={label}
    >
      {/* Decoración sutil de fondo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 25%, rgba(201,169,110,0.18) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(26,58,107,0.08) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full opacity-20"
        style={{ background: 'var(--gradient-dorado)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/70 shadow-sm">
        <ImageIcon className="h-7 w-7 text-dorado/60" aria-hidden="true" />
      </div>
      <span className="relative z-10 max-w-[80%] text-center font-sans text-[11px] leading-tight tracking-wide text-azul-rey/35">
        {/* REEMPLAZAR: imagen real */}
        {label}
      </span>
    </div>
  );
}
