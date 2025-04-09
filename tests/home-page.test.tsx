import { test, expect } from 'playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display header and game list', async ({ page }) => {
    await expect(page.getByText('GameDay')).toBeVisible();
    await expect(page.getByText('Team A')).toBeVisible();
  });

  test('should enable select button when game is selected', async ({
    page,
  }) => {
    const selectButton = page.getByRole('button', { name: 'Select Game' });
    await expect(selectButton).toBeDisabled();

    // Select a game
    await page.getByText('Team A').click();
    await expect(selectButton).toBeEnabled();

    // Unselect the game
    await page.getByText('Team A').click();
    await expect(selectButton).toBeDisabled();
  });

  test('should navigate to poster page when select button is clicked', async ({
    page,
  }) => {
    // Select a game first
    await page.getByText('Team A').click();

    // Click select button
    await page.getByRole('button', { name: 'Select Game' }).click();

    // Check if navigated to poster page
    await expect(page).toHaveURL(/.*\/poster/);
  });
});
