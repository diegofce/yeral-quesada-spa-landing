'use client';

import {
  SERVICIOS_CORPORALES,
  SERVICIOS_FACIALES,
} from '@/constants/servicios';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import ServicioCard from './ServicioCard';

/**
 * Tabs para alternar entre servicios faciales y corporales.
 * Estado local con useState — requiere "use client".
 */

type TabActiva = 'facial' | 'corporal';

export default function ServiciosTabs() {
  const [tabActiva, setTabActiva] = useState<TabActiva>('facial');

  const serviciosMostrados =
    tabActiva === 'facial' ? SERVICIOS_FACIALES : SERVICIOS_CORPORALES;

  return (
    <div>
      {/* Tabs de navegación */}
      <div
        className="mb-10 flex justify-center"
        role="tablist"
        aria-label="Categorías de servicios"
      >
        <div className="inline-flex rounded-full border border-borde bg-fondo p-1">
          {(['facial', 'corporal'] as TabActiva[]).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={tabActiva === tab}
              aria-controls={`panel-${tab}`}
              id={`tab-${tab}`}
              onClick={() => setTabActiva(tab)}
              className={cn(
                'rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-200',
                tabActiva === tab
                  ? 'bg-azul-rey text-white shadow-sm'
                  : 'text-gris hover:text-carbon',
              )}
            >
              Estética {tab === 'facial' ? 'Facial' : 'Corporal'}
            </button>
          ))}
        </div>
      </div>

      {/* Panel de servicios */}
      <div
        id={`panel-${tabActiva}`}
        role="tabpanel"
        aria-labelledby={`tab-${tabActiva}`}
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviciosMostrados.map((servicio) => (
            <ServicioCard key={servicio.id} servicio={servicio} />
          ))}
        </div>
      </div>
    </div>
  );
}
