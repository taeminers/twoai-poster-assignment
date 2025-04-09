import { test, expect } from 'playwright/test';

test.describe('Poster Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/poster?gameId=1');
  });

  test('should go back to home page when clicking back button', async ({
    page,
  }) => {
    const backButton = page.getByTestId('header__left-button');
    await backButton.waitFor({ state: 'visible' });
    await backButton.click();
    await expect(page).toHaveURL('http://localhost:3000/');
  });

  test('should display canvas', async ({ page }) => {
    const canvas = page.locator('canvas').first();
    await canvas.waitFor({ state: 'visible' });
    await expect(canvas).toBeVisible();
  });

  test('should search and insert dynamic images', async ({ page }) => {
    // Search for images
    const searchInput = page.getByPlaceholder('Search for images...');
    await searchInput.fill('soccer');
    await page.getByRole('button', { name: 'Search' }).click();

    // Wait for images to load
    await page.waitForSelector('.dynamic-images__picture');

    // Select an image
    const firstImage = page.locator('.dynamic-images__picture').first();
    await firstImage.click();

    // Verify image is selected
    await expect(firstImage).toHaveClass(/dynamic-images__picture--selected/);

    // Insert the image
    await page.getByRole('button', { name: 'Insert Photo' }).click();

    // Verify image is added to canvas
    const canvasImage = page.locator('canvas').first();
    await expect(canvasImage).toBeVisible();
  });

  test('should be able to upload image', async ({ page }) => {
    // Click edit button to enable upload
    const editButton = page.getByTestId('header__right-button');
    await editButton.waitFor({ state: 'visible' });
    await editButton.click();

    // upload button is not the same as uploadphoto icon. so no need for state visible
    const uploadButton = page.getByTestId('image-uploader__input');

    // Create a test file
    const fileContent =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
    const file = {
      name: 'test.png',
      mimeType: 'image/png',
      buffer: Buffer.from(fileContent.split(',')[1], 'base64'),
    };

    // Upload the file
    await uploadButton.setInputFiles([file]);

    // Verify image is added to canvas
    const canvasImage = page.locator('canvas').first();
    await expect(canvasImage).toBeVisible();
  });

  test('should download poster when download button is clicked', async ({
    page,
  }) => {
    // Wait for download button to be visible and enabled
    const downloadButton = page.getByRole('button', { name: 'Download' });
    await downloadButton.waitFor({ state: 'visible' });
    await expect(downloadButton).toBeEnabled();

    // Set up download listener
    const downloadPromise = page.waitForEvent('download');
    await downloadButton.click();

    // Wait for download to start
    const download = await downloadPromise;

    // Verify download filename
    expect(download.suggestedFilename()).toBe('gameday-poster.png');
  });
});
