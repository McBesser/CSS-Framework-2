class CSSF {
   constructor(settings = {}) {
      this.prefix = settings.prefix !== undefined ? settings.prefix : 'cssf';
      this.templates = Object.assign({
            'grid-layout-standard': '[full-width-start] minmax(§0, 1fr) [breakout-start] minmax(0, calc((§2 - §1) / 2)) [content-start] min(100% - (§0 * 2), §1) [content-end] minmax(0, calc((§2 - §1) / 2)) [breakout-end] minmax(§0, 1fr) [full-width-end]',
            'clamp': 'clamp(§0, §1, §2)',
            'calc': 'calc(§0)',
            'rgb': 'rgb(§0, §1, §2)',
            'hsl': 'hsl(§0, §1, §2)',
            'rgba': 'rgba(§0, §1, §2, §3)',
            'var': 'var(§0, §1)',
            'rect': 'rect(§0)',
            'inset': 'inset(§0)',
            'max': 'max(§0, §1)'
         },
         settings.templates || {}
      );
      this.alias = Object.assign({
            'test-set1': 'br1_solid--color_black--px20--py10',
            'test-set2': 'br1_solid--color_white--px20--py10',
            'test-br1': 'br1_solid--color_black',
            'test-br2': 'br1_solid--color_white',
            'bg1': 'bg_var-color-1',
            'bg2': 'bg_var-color-2',
            'bg3': 'bg_var-color-3',
            'bg4': 'bg_var-color-4',
            'con576': 'max-width576px--m_auto--box-sizing_border-box',
            'con768': 'max-width768px--m_auto',
            'con992': 'max-width992px--m_auto',
            'con1200': 'max-width1200px--m_auto',
            'con1400': 'max-width1400px--m_auto',
            'flex-layout': 'd_flex--f-d_row--f-w_nowrap--f-jc_start--f-ac_stretch--f-ai_stretch',
            'flex': 'd_flex--f-d_row--f-w_wrap--f-jc_start--f-ac_stretch--f-ai_stretch',
            /* -------------------------------------------------------------------------------------- */
            'fcol25': 'f_1_1--flex-basis100p_cd4int--max-width100p_cd4int--box-sizing_border-box',
            'fcol33': 'f_1_1--flex-basis100p_cd3int--max-width100p_cd3int--box-sizing_border-box',
            'fcol50': 'f_1_1--flex-basis100p_cd2int--max-width100p_cd2int--box-sizing_border-box',
            'fcol66': 'f_1_1--flex-basis100p_cd3int_cm2int--max-width100p_cd2int--box-sizing_border-box',
            'fcol75': 'f_1_1--flex-basis100p_cd4int_cm3int--max-width100p_cd2int--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'fcol25g5x1': 'f_1_1--flex-basis100p_cd4int_cs5--max-width100p_cd4int_cs5_cd2int_cm1int--box-sizing_border-box',
            'fcol25g5x3': 'f_1_1--flex-basis100p_cd4int_cs5--max-width100p_cd4int_cs5_cd4int_cm3int--box-sizing_border-box',
            'fcol33g5x2': 'f_1_1--flex-basis100p_cd3int_cs5--max-width100p_cd3int_cs5_cd3int_cm2int--box-sizing_border-box',
            'fcol50g5x1': 'f_1_1--flex-basis100p_cd2int_cs5--max-width100p_cd2int_cs5_cd2int_cm1int--box-sizing_border-box',
            'fcol66g5x1': 'f_1_1--flex-basis100p_cd3int_cm2int_cs5--max-width100p_cd2int_cs5_cd2int_cm1int--box-sizing_border-box',
            'fcol75g5x1': 'f_1_1--flex-basis100p_cd4int_cm3int_cs5--max-width100p_cd2int_cs5_cd2int_cm1int--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'fcol25g10x1': 'f_1_1--flex-basis100p_cd4int_cs10--max-width100p_cd4int_cs10_cd2int_cm1int--box-sizing_border-box',
            'fcol25g10x3': 'f_1_1--flex-basis100p_cd4int_cs10--max-width100p_cd4int_cs10_cd4int_cm3int--box-sizing_border-box',
            'fcol33g10x2': 'f_1_1--flex-basis100p_cd3int_cs10--max-width100p_cd3int_cs10_cd3int_cm2int--box-sizing_border-box',
            'fcol50g10x1': 'f_1_1--flex-basis100p_cd2int_cs10--max-width100p_cd2int_cs10_cd2int_cm1int--box-sizing_border-box',
            'fcol66g10x1': 'f_1_1--flex-basis100p_cd3int_cm2int_cs10--max-width100p_cd2int_cs10_cd2int_cm1int--box-sizing_border-box',
            'fcol75g10x1': 'f_1_1--flex-basis100p_cd4int_cm3int_cs10--max-width100p_cd2int_cs10_cd2int_cm1int--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'fcol25g20x1': 'f_1_1--flex-basis100p_cd4int_cs20--max-width100p_cd4int_cs20_cd2int_cm1int--box-sizing_border-box',
            'fcol25g20x3': 'f_1_1--flex-basis100p_cd4int_cs20--max-width100p_cd4int_cs20_cd4int_cm3int--box-sizing_border-box',
            'fcol33g20x2': 'f_1_1--flex-basis100p_cd3int_cs20--max-width100p_cd3int_cs20_cd3int_cm2int--box-sizing_border-box',
            'fcol50g20x1': 'f_1_1--flex-basis100p_cd2int_cs20--max-width100p_cd2int_cs20_cd2int_cm1int--box-sizing_border-box',
            'fcol66g20x1': 'f_1_1--flex-basis100p_cd3int_cm2int_cs20--max-width100p_cd2int_cs20_cd2int_cm1int--box-sizing_border-box',
            'fcol75g20x1': 'f_1_1--flex-basis100p_cd4int_cm3int_cs20--max-width100p_cd2int_cs20_cd2int_cm1int--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'fcol25g30x1': 'f_1_1--flex-basis100p_cd4int_cs30--max-width100p_cd4int_cs30_cd2int_cm1int--box-sizing_border-box',
            'fcol25g30x3': 'f_1_1--flex-basis100p_cd4int_cs30--max-width100p_cd4int_cs30_cd4int_cm3int--box-sizing_border-box',
            'fcol33g30x2': 'f_1_1--flex-basis100p_cd3int_cs30--max-width100p_cd3int_cs30_cd3int_cm2int--box-sizing_border-box',
            'fcol50g30x1': 'f_1_1--flex-basis100p_cd2int_cs30--max-width100p_cd2int_cs30_cd2int_cm1int--box-sizing_border-box',
            'fcol66g30x1': 'f_1_1--flex-basis100p_cd3int_cm2int_cs30--max-width100p_cd2int_cs30_cd2int_cm1int--box-sizing_border-box',
            'fcol75g30x1': 'f_1_1--flex-basis100p_cd4int_cm3int_cs30--max-width100p_cd2int_cs30_cd2int_cm1int--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'fcol25g40x1': 'f_1_1--flex-basis100p_cd4int_cs40--max-width100p_cd4int_cs40_cd2int_cm1int--box-sizing_border-box',
            'fcol25g40x3': 'f_1_1--flex-basis100p_cd4int_cs40--max-width100p_cd4int_cs40_cd4int_cm3int--box-sizing_border-box',
            'fcol33g40x2': 'f_1_1--flex-basis100p_cd3int_cs40--max-width100p_cd3int_cs40_cd3int_cm2int--box-sizing_border-box',
            'fcol50g40x1': 'f_1_1--flex-basis100p_cd2int_cs40--max-width100p_cd2int_cs40_cd2int_cm1int--box-sizing_border-box',
            'fcol66g40x1': 'f_1_1--flex-basis100p_cd3int_cm2int_cs40--max-width100p_cd2int_cs40_cd2int_cm1int--box-sizing_border-box',
            'fcol75g40x1': 'f_1_1--flex-basis100p_cd4int_cm3int_cs40--max-width100p_cd2int_cs40_cd2int_cm1int--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'fcol100': 'f_1_1_100p--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'grid-layout': 'd_grid--tpl-grid-layout-standard_grid-template-columns_var-gl-spacing_var-gl-content_var-gl-outbreak',
            'btn': 'px15--py10--cursor_pointer--br3_solid_var-btn-br-color'
         },
         settings.alias || {}
      );
      this.shorts = Object.assign({
            'tpl': 'template',
            'mq': 'media',
            'mqd': 'media-dark',
            'mql': 'media-light',
            'cq': 'container',
            'cqd': 'container-dark',
            'cql': 'container-light',
            'm': 'margin',
            'my': ['margin-top', 'margin-bottom'],
            'mx': ['margin-left', 'margin-right'],
            'mt': 'margin-top',
            'mr': 'margin-right',
            'mb': 'margin-bottom',
            'ml': 'margin-left',
            'p': 'padding',
            'py': ['padding-top', 'padding-bottom'],
            'px': ['padding-left', 'padding-right'],
            'pt': 'padding-top',
            'pr': 'padding-right',
            'pb': 'padding-bottom',
            'pl': 'padding-left',
            'w': 'width',
            'h': 'height',
            'c': 'color',
            'bg': 'background',
            'bg-c': 'background-color',
            'br': 'border',
            'br-t': 'border-top',
            'br-r': 'border-right',
            'br-b': 'border-bottom',
            'br-l': 'border-left',
            'br-r': 'border-radius',
            'br-t-r': ['border-top-left-radius', 'border-top-right-radius'],
            'br-r-r': ['border-top-left-radius', 'border-bottom-left-radius'],
            'br-b-r': ['border-bottom-left-radius', 'border-bottom-right-radius'],
            'br-l-r': ['border-top-left-radius', 'border-bottom-left-radius'],
            'br-tl-r': 'border-top-left-radius',
            'br-tr-r': 'border-top-right-radius',
            'br-bl-r': 'border-bottom-left-radius',
            'br-br-r': 'border-bottom-right-radius',
            't': 'top',
            'r': 'right',
            'l': 'left',
            'b': 'bottom',
            'f': 'flex',
            'f-d': 'flex-direction',
            'f-w': 'flex-wrap',
            'f-jc': 'justify-content',
            'f-ai': 'align-items',
            'f-ac': 'align-content',
            'f-as': 'align-self',
            'g': 'grid',
            'd': 'display',
            'ca': '+',
            'cs': '-',
            'cm': '*',
            'cd': '/',
            'start': 'flex-start',
            'end': 'flex-end',
            'between': 'space-between',
            'around': 'space-around',
         },
         settings.shorts || {}
      );

      document.addEventListener('DOMContentLoaded', () => {
         this.initialize();
         this.observeDOMChanges();
      });
   }

   initialize() {
      this.cssClasses = this.getCssClasses();
      this.styles = this.getStyles(this.cssClasses);
      this.applyStylesToDOM(this.styles);
   }

   observeDOMChanges() {
      const observer = new MutationObserver(() => {
         this.initialize();
      });

      observer.observe(document.body, {
         childList: true,
         subtree: true,
         attributes: true,
         characterData: true,
      });
   }

   getCssClasses() {
      const allElements = document.querySelectorAll('[class]');
      const uniqueCssClassesArray = [];

      allElements.forEach((element) => {
         const classesArray = element.classList.value.split(' ');

         classesArray.forEach((className) => {
            if (this.prefix === '' || className.startsWith(this.prefix + '--')) {
               const cssClass = (this.prefix === '') ? className : className.substring(this.prefix.length + 2);

               if (!uniqueCssClassesArray.includes(cssClass)) {
                  uniqueCssClassesArray.push(cssClass);
               }
            }
         });
      });
      
      /* ------------------------------------------------------ */
      const customComparator = (a, b) => {
        const isCqA = a.startsWith("cq");
        const isCqB = b.startsWith("cq");
        const isMqA = a.startsWith("mq");
        const isMqB = b.startsWith("mq");

        if (isCqA && !isCqB) {
          return 1;
        } else if (isMqA && !isMqB) {
          return isCqB ? -1 : 1;
        } else if (isCqB && !isCqA) {
          return -1;
        } else if (isMqB && !isMqA) {
          return isCqA ? 1 : -1;
        }

        const numberA = parseInt(a.match(/\d+/) || 0);
        const numberB = parseInt(b.match(/\d+/) || 0);

        return numberA - numberB;
      };

      const sortedArray = uniqueCssClassesArray.sort(customComparator);
      /* ------------------------------------------------------ */
      /* return uniqueCssClassesArray; */
      return sortedArray;
   }


   getStyles(cssClasses) {
      let data = [];
      cssClasses.forEach((cssClass, cssClassIndex) => {

         const cssClassUse = cssClass;

         let parts = [];
         cssClass.split('--').forEach((part, partIndex) => {
            parts.push(...(this.alias[part] ? this.alias[part].split('--') : [part]));
         });
         let query = '';
         let styles = '';
         styles += this.prefix ? `.${this.prefix}--${cssClassUse}{` : `.${cssClassUse}{`;
         parts.forEach((part, partIndex) => {
            const subParts = part.split('_');
            const convertedSubPartsData = [];
            subParts.forEach((subPart, subPartIndex) => {
               convertedSubPartsData.push(this.convertSubPartData(subPart));
            });
            const mainInstruction = convertedSubPartsData.shift();
            const instructions = convertedSubPartsData;
            if (subParts[0].startsWith('tpl')) {
               const tpl = this.templates[subParts[0].substring(4)];
               const propertyName = convertedSubPartsData.shift()['property'];
               const val = this.fillTemplate(tpl, convertedSubPartsData);
               styles += `${propertyName}: ${val} `;
               styles += ` !important;`;
            } else if (['media', 'media-dark', 'media-light', 'container', 'container-dark', 'container-light'].includes(mainInstruction.property)) {
               let calc = 0;
               if (instructions.length > 0 && (instructions[0].number && (instructions[0].unit || instructions[0].unit === ''))) {
                  const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                  properties.forEach((property) => {
                     const convProperty = (['media', 'media-dark', 'media-light'].includes(property)) ? 'media' : (['container', 'container-dark', 'container-light'].includes(property) ? 'container' : '');
                     query += `@${convProperty}(min-width: `;
                     calc = this.calculateValues(calc, 'px', '+', mainInstruction.number, mainInstruction.unit);
                     instructions.forEach((instruction, instructionIndex) => {
                        calc = this.calculateValues(calc, 'px', instruction.property, instruction.number, instruction.unit);
                     });
                     query += `${calc}px)`;
                     query += (mainInstruction.property === 'media-dark' || mainInstruction.property === 'container-dark') ? ` and (prefers-color-scheme: dark)` : ``;
                     query += (mainInstruction.property === 'media-light' || mainInstruction.property === 'container-light') ? ` and (prefers-color-scheme: light)` : ``;
                  });
               } else if (mainInstruction.number && (mainInstruction.unit || mainInstruction.unit === '')) {
                  const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                  properties.forEach((property) => {
                     const convProperty = (['media', 'media-dark', 'media-light'].includes(property)) ? 'media' : (['container', 'container-dark', 'container-light'].includes(property) ? 'container' : '');
                     query += `@${convProperty}(min-width: ${mainInstruction.number}${mainInstruction.unit})`;
                     query += (mainInstruction.property === 'media-dark' || mainInstruction.property === 'container-dark') ? ` and (prefers-color-scheme: dark)` : ``;
                     query += (mainInstruction.property === 'media-light' || mainInstruction.property === 'container-light') ? ` and (prefers-color-scheme: light)` : ``;
                  });
               } else {
                  const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                  properties.forEach((property) => {
                     const convProperty = (['media', 'media-dark', 'media-light'].includes(property)) ? 'media' : (['container', 'container-dark', 'container-light'].includes(property) ? 'container' : '');
                     /* query += `@${convProperty}(min-width: ${mainInstruction.number}${mainInstruction.unit})`; */
                     query += `@${convProperty}`;
                     query += (mainInstruction.property === 'media-dark' || mainInstruction.property === 'container-dark') ? ` (prefers-color-scheme: dark)` : ``;
                     query += (mainInstruction.property === 'media-light' || mainInstruction.property === 'container-light') ? ` (prefers-color-scheme: light)` : ``;
                  });
               }
            } else {

               if (instructions.length > 0 && (instructions[0].property && instructions[0].number && (instructions[0].unit || instructions[0].unit === ''))) {
                  const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                  properties.forEach((property) => {
                     styles += `${property}: calc(${mainInstruction.number}${mainInstruction.unit}`;
                     instructions.forEach((instruction, instructionIndex) => {
                        styles += ` ${instruction.property} ${instruction.number}${instruction.unit}`;
                     });
                     styles += `) !important;`;
                  });
               } else if (instructions.length > 0 && mainInstruction.number && (mainInstruction.unit || mainInstruction.unit === '')) {
                  const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                  styles += `${properties[0]}: ${mainInstruction.number}${mainInstruction.unit} `;
                  instructions.forEach((instruction, instructionIndex) => {
                     styles += ` ${instruction.property}`;
                  });
                  styles += ` !important;`;
               } else if (instructions.length > 0) {
                  const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                  styles += `${properties[0]}: `;
                  instructions.forEach((instruction, instructionIndex) => {
                     styles += instruction.property ? ` ${instruction.property}` : ` ${instruction.number}${instruction.unit}`;
                  });
                  styles += ` !important;`;
               } else {
                  const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                  properties.forEach((property) => {
                     styles += `${property}: ${mainInstruction.number}${mainInstruction.unit} !important;`;
                  });
               }
            }
         });
         styles += `}`;
         data.push(query !== '' ? `${query}{${styles}}` : styles);
      });
      return data;
   }
   fillTemplate(tpl, data) {
      let result = tpl;

      for (let i = 0; i < data.length; i++) {
         const entry = data[i];
         const placeholder = new RegExp(`§${i}`, 'g');

         let replacement = '';
         replacement += entry.property ?? '';
         replacement += entry.number ?? '';
         replacement += entry.unit ?? '';
         result = result.replaceAll(placeholder, replacement);
      }

      return result;
   }

   convertSubPartData(subPart) {
      if (subPart.startsWith('val')) {
         const propertyName = this.shorts[subPart.substring(3)] || subPart.substring(3);
         return {
            property: `-${propertyName}`,
            number: null,
            unit: null
         };
      } else if (subPart.startsWith('var')) {
         const propertyName = this.shorts[subPart.substring(3)] || subPart.substring(3);
         return {
            property: `var(-${propertyName})`,
            number: null,
            unit: null
         };
      }

      let regex = /(\D*[A-Za-z]+)(-?\d+)(\D*)/;
      let matches = subPart.match(regex);
      if (!matches || matches.length !== 4) {

         regex = /(-?\d+)(\D*)/;
         matches = subPart.match(regex);
         if (!matches || matches.length !== 3) {
            const propertyName = this.shorts[subPart] || subPart;
            return {
               property: propertyName
            };
         } else {
            let number = parseInt(matches[1], 10);
            let unit = (matches[2].endsWith('pxrem')) ? 'rem' : matches[2];
            number = (matches[2].endsWith('pxrem')) ? number / 16 : number;
            unit = (unit === 'p') ? '%' : unit;
            unit = (unit === 'int') ? '' : unit;
            return {
               property: null,
               number: number,
               unit: unit
            };
         }


      } else {
         const propertyName = this.shorts[matches[1]] || matches[1];
         const property = propertyName;
         let number = parseInt(matches[2], 10);
         let unit = (!Array.isArray(property) && (property.startsWith('media') || property.startsWith('container')) && !property.endsWith('px')) ? 'px' : matches[3];
         number = (unit === '') ? number / 16 : number;
         unit = (unit === '') ? 'rem' : unit;
         unit = (unit === 'p') ? '%' : unit;
         unit = (unit === 'int') ? '' : unit;

         return {
            property: property,
            number: number,
            unit: unit
         };
      }
   }

   calculateValues(value1, unit1, operation, value2, unit2) {
      const remToPx = (rem) => rem * 16;

      if (unit1 !== unit2) {
         if (unit1 === 'rem' && unit2 === 'px') {
            value1 = remToPx(value1);
         } else if (unit1 === 'px' && unit2 === 'rem') {
            value2 = remToPx(value2);
         }
      }

      if (unit2 === '%') {
         value2 = (value1 * value2) / 100;
      }

      let result;
      switch (operation) {
         case '+':
            result = value1 + value2;
            break;
         case '-':
            result = value1 - value2;
            break;
         case '*':
            result = value1 * value2;
            break;
         case '/':
            result = value1 / value2;
            break;
         default:
            console.error('Invalid operation');
            return null;
      }

      return result;
   }

   applyStylesToDOM(styles) {
      const styleClassPrefix = this.prefix ? `${this.prefix}` : `cssf`
      const styleTag = document.createElement('style');
      styleTag.type = 'text/css';

      const stylesString = styles.join('\n');

      styleTag.appendChild(document.createTextNode(stylesString));

      const existingStyleTag = document.querySelector(`style.${styleClassPrefix}-styles`);
      if (existingStyleTag) {
         existingStyleTag.remove();
      }

      styleTag.classList.add(`${styleClassPrefix}-styles`);

      document.head.appendChild(styleTag);
   }

}

const cssfInstance = new CSSF({
   prefix: 'cssf'
});