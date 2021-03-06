import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const component = await page.find('my-component');
    const element = await page.find('my-component >>> div');
    expect(element.textContent).toEqual(`Hello, World hehe! I'm `);
    // expect(element.outerHTML).toMatchSnapshot();

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World hehe! I'm James`);
    // expect(element.outerHTML).toMatchSnapshot();

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World hehe! I'm James Quincy`);
    // expect(element.outerHTML).toMatchSnapshot();

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World hehe! I'm James Earl Quincy`);
    // expect(element.outerHTML).toMatchSnapshot();
    await page.compareScreenshot('My Componment (...is beautiful. Look at it!)', {fullPage: false});

  });
});
// 