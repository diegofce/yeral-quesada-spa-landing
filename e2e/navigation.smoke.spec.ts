import { expect, test } from '@playwright/test';

test('smoke de navegacion principal', async ({ page }) => {
  await page.goto('/');
  const navegacionPrincipal = page.getByLabel('Navegación principal');

  await expect(page.locator('#hero-titulo')).toBeVisible();

  await navegacionPrincipal.getByRole('link', { name: 'Servicios' }).click();
  await expect(page).toHaveURL(/\/servicios$/);
  await expect(
    page.getByRole('heading', { name: /nuestros servicios/i }),
  ).toBeVisible();

  await navegacionPrincipal.getByRole('link', { name: 'Productos' }).click();
  await expect(page).toHaveURL(/\/productos$/);
  await expect(
    page.getByRole('heading', { name: /productos seleccionados/i }),
  ).toBeVisible();

  await navegacionPrincipal.getByRole('link', { name: 'Nosotros' }).click();
  await expect(page).toHaveURL(/\/nosotros$/);
  await expect(
    page.getByRole('heading', { name: /qui[eé]nes somos/i }),
  ).toBeVisible();

  await navegacionPrincipal.getByRole('link', { name: 'Galería' }).click();
  await expect(page).toHaveURL(/\/galeria$/);
  await expect(
    page.getByRole('heading', { name: /galer[ií]a/i }),
  ).toBeVisible();

  await navegacionPrincipal.getByRole('link', { name: 'Contacto' }).click();
  await expect(page).toHaveURL(/\/contacto$/);
  await expect(
    page.getByRole('heading', { name: /cont[aá]ctanos/i }),
  ).toBeVisible();
});
