"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TODOS_LOS_SERVICIOS } from "@/constants/servicios";
import { CONTACT_FORM_ENDPOINT, crearWhatsAppUrl } from "@/constants/config";

/**
 * Formulario de contacto con validación Zod y React Hook Form.
 * CONECTAR: endpoint de envío de formulario o servicio de email (EmailJS, Resend, etc.)
 */

/** Esquema de validación Zod */
const esquemaContacto = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  telefono: z
    .string()
    .min(7, "Ingresa un número de teléfono válido")
    .max(15, "El número es demasiado largo")
    .regex(/^[0-9+\s-]+$/, "Solo se permiten números, espacios y guiones"),
  email: z
    .string()
    .email("Ingresa un correo electrónico válido")
    .optional()
    .or(z.literal("")),
  servicioInteres: z.string().optional(),
  mensaje: z
    .string()
    .max(500, "El mensaje no puede superar los 500 caracteres")
    .optional(),
});

type DatosFormulario = z.infer<typeof esquemaContacto>;

/** Componente de campo de formulario con etiqueta y mensaje de error */
function Campo({
  label,
  error,
  required,
  children,
  htmlFor,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-carbon"
      >
        {label}
        {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

/** Clases base para inputs */
const claseInput =
  "rounded-lg border border-borde bg-white px-4 py-2.5 text-sm text-carbon placeholder:text-gris/60 transition-colors focus:border-azul-rey focus:outline-none focus:ring-1 focus:ring-azul-rey disabled:opacity-50";

export default function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);
  const [mensajeError, setMensajeError] = useState<string | null>(null);
  const [canalEnvio, setCanalEnvio] = useState<"formulario" | "whatsapp">("formulario");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DatosFormulario>({
    resolver: zodResolver(esquemaContacto),
  });

  const onSubmit = async (datos: DatosFormulario) => {
    setMensajeError(null);

    try {
      if (!CONTACT_FORM_ENDPOINT) {
        const servicioSeleccionado = TODOS_LOS_SERVICIOS.find(
          (servicio) => servicio.id === datos.servicioInteres,
        );

        const mensajeWhatsApp = [
          "Hola, quiero información sobre sus servicios.",
          `Nombre: ${datos.nombre}`,
          `Teléfono: ${datos.telefono}`,
          datos.email ? `Correo: ${datos.email}` : null,
          servicioSeleccionado
            ? `Servicio de interés: ${servicioSeleccionado.nombre}`
            : null,
          datos.mensaje ? `Mensaje: ${datos.mensaje}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        window.open(
          crearWhatsAppUrl(mensajeWhatsApp),
          "_blank",
          "noopener,noreferrer",
        );
        setCanalEnvio("whatsapp");
        setEnviado(true);
        reset();
        return;
      }

      const respuesta = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error("No fue posible enviar el formulario en este momento.");
      }

      setEnviado(true);
      setCanalEnvio("formulario");
      reset();
    } catch (error) {
      const mensaje =
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el formulario.";
      setMensajeError(mensaje);
    }
  };

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-borde bg-white p-10 text-center shadow-sm">
        <CheckCircle className="h-14 w-14 text-green-500" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-carbon">
          ¡Mensaje enviado!
        </h3>
        <p className="text-sm text-gris">
          {canalEnvio === "whatsapp"
            ? "Te redirigimos a WhatsApp para completar el envío de tu solicitud."
            : "Gracias por contactarnos. Te responderemos lo antes posible."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-2xl border border-borde bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <h2 className="font-display text-xl font-semibold text-carbon">
        Envíanos un mensaje
      </h2>

      {/* Nombre */}
      <Campo label="Nombre completo" error={errors.nombre?.message} required htmlFor="nombre">
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre completo"
          autoComplete="name"
          className={cn(claseInput, errors.nombre && "border-red-400")}
          {...register("nombre")}
        />
      </Campo>

      {/* Teléfono */}
      <Campo label="Teléfono" error={errors.telefono?.message} required htmlFor="telefono">
        <input
          id="telefono"
          type="tel"
          placeholder="300 123 4567"
          autoComplete="tel"
          className={cn(claseInput, errors.telefono && "border-red-400")}
          {...register("telefono")}
        />
      </Campo>

      {/* Email */}
      <Campo label="Correo electrónico" error={errors.email?.message} htmlFor="email">
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          autoComplete="email"
          className={cn(claseInput, errors.email && "border-red-400")}
          {...register("email")}
        />
      </Campo>

      {/* Servicio de interés */}
      <Campo label="Servicio de interés" htmlFor="servicioInteres">
        <select
          id="servicioInteres"
          className={cn(claseInput, "cursor-pointer")}
          {...register("servicioInteres")}
        >
          <option value="">Selecciona un servicio (opcional)</option>
          {TODOS_LOS_SERVICIOS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.nombre}
            </option>
          ))}
        </select>
      </Campo>

      {/* Mensaje */}
      <Campo label="Mensaje" error={errors.mensaje?.message} htmlFor="mensaje">
        <textarea
          id="mensaje"
          rows={4}
          placeholder="¿En qué podemos ayudarte?"
          className={cn(claseInput, "resize-none", errors.mensaje && "border-red-400")}
          {...register("mensaje")}
        />
      </Campo>

      {/* Botón enviar */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2 rounded bg-azul-rey px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow transition-colors hover:bg-azul-oscuro focus:outline-none focus-visible:ring-2 focus-visible:ring-azul-rey focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Enviar Mensaje
          </>
        )}
      </button>

      {mensajeError && (
        <p role="alert" className="text-xs text-red-500">
          {mensajeError}
        </p>
      )}

      <p className="text-xs text-gris">
        <span className="text-red-500">*</span> Campos obligatorios.
        Tu información es confidencial y no será compartida.
      </p>
    </form>
  );
}
