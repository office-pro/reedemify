import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  updateCustomColors(primaryColor: string, secondaryColor: string, headerColor: string = "#ffffff", fontColor: string = "#0b171b") {
    document.documentElement.style.setProperty('--ion-color-primary', secondaryColor);
    document.documentElement.style.setProperty('--ion-background-color', primaryColor);
    document.documentElement.style.setProperty('--ion-color-secondary', secondaryColor);
    document.documentElement.style.setProperty('--ion-toolbar-background', headerColor);

    document.documentElement.style.setProperty('--ion-text-color', fontColor);
    document.documentElement.style.setProperty('--ion-color-base', fontColor);
    this.generateMultipleColorShade(primaryColor,fontColor)
    // this.generatePrimaryColorShades(10);
  }

  convertHexToHSL(hex: string) {
    // Remove the '#' symbol if it's present
    hex = hex.replace('#', '');

    // Parse the hexadecimal color value into RGB components
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    // Find the minimum and maximum values among the R, G, and B components
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Calculate the luminance (lightness)
    const l = (max + min) / 2;

    let h: any;
    let s: any;

    // Calculate the hue (H) and saturation (S) based on the maximum and minimum values
    if (max === min) {
      h = s = 0; // Achromatic (gray)
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    // Convert hue to degrees
    h *= 360;

    // Round values and return as an object
    return {
      h: Math.round(h),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
      rgb: `rgb(${r}, ${g}, ${b})`
    };
  }

  isColorDark(rgb: string) {
  // Split the RGB values
    const values = rgb.match(/\d+/g);
    if (!values || values.length !== 3) {
      return false; // Invalid input
    }

    const [r, g, b] = values.map(Number);

    // Calculate relative luminance
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    // Adjust the luminance threshold as needed (0.5 is a common threshold)
    return luminance < 128; // If the luminance is below 128 (out of 255), consider it dark
  }

  generatePrimaryColorShades(lightnessIncrement: number) {
    const root = document.documentElement;
    const primaryColor = getComputedStyle(root).getPropertyValue('--ion-color-primary');
    
    // Convert the primary color to HSL format
    const primaryHSL = this.convertHexToHSL(primaryColor);
    const { h, s, l } = primaryHSL;
    
    const lighterShade = `hsl(${h}, ${s}%, ${l + lightnessIncrement}%)`;
    const darkerShade = `hsl(${h}, ${s}%, ${l - lightnessIncrement}%)`;
    
    // Set the new shades as CSS variables
    root.style.setProperty('--ion-color-primary-lighter', lighterShade);
    root.style.setProperty('--ion-color-primary-darker', darkerShade);
  }

  calculateShade(baseColor: string, step: number) {
    // Convert the base color to RGB
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);

    // Calculate the new color values
    const newR = Math.max(0, Math.min(255, r + step));
    const newG = Math.max(0, Math.min(255, g + step));
    const newB = Math.max(0, Math.min(255, b + step));

    // Convert the new RGB values back to hexadecimal
    const newColor = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;

    return newColor;
  }

  generateMultipleColorShade(baseColor: string, alternateColor: string) {
    let steps = this.generateSteps();

    if(steps?.length > 0) {
      let colorShades: any = {};
      steps.forEach((step: number) => {
        const root = document.documentElement;
        colorShades[step] = this.calculateShade(baseColor,step/25);
        console.log(`--ion-color-step-${step}`, colorShades[step])
        root.style.setProperty(`--ion-color-step-${step}`, step != 850 ? colorShades[step] : alternateColor);
      })

      document.documentElement.style.setProperty(`--ion-card-background`, colorShades[200] );
    }
  }

  private generateSteps(start = 0, end = 950, stepVal = 50) {
    let step = [];

    for(let i = 0; i <= end; i = i+stepVal) {
      step.push(i);
    }
    return step;
  }
}

