class CSSF {
   constructor(settings = {}) {
      this.version = '0.1';
      this.prefix = settings.prefix !== undefined ? settings.prefix : 'cssf';
      this.templates = Object.assign({
            'grid-layout-cols-standard': '[full-start] minmax(§0, 1fr) [outside-start] minmax(0, calc((§2 - §1) / 2)) [content-start] min(100% - (§0 * 2), §1) [content-end] minmax(0, calc((§2 - §1) / 2)) [outside-end] minmax(§0, 1fr) [full-end]',
            'test-grid-layout-rows-standard': '[full-start] minmax(§0, 1fr) [outside-start] [content-start] [content-end] [outside-end] minmax(§0, 1fr) [full-end]',
            'grid-layout-rows-standard': 'auto',
            'clamp-size-standard': 'clamp(1rem, 1rem + calc((§0 - 1rem) / (§1 - 0rem) * 100)vw, §0)',
            'clamp': 'clamp(§0, §1, §2)',
            'calc': 'calc(§0)',
            'rgb': 'rgb(§0, §1, §2)',
            'hsl': 'hsl(§0, §1, §2)',
            'rgba': 'rgba(§0, §1, §2, §3)',
            'var': 'var(§0, §1)',
            'rect': 'rect(§0, §1, §2, §3)',
            'inset': 'inset(§0)',
            'min': 'min(§0, §1)',
            'max': 'max(§0, §1)',
            'minmax': 'minmax(§0, §1)',
            'repeat': 'repeat(§0, §1)',
            'repeat-minmax': 'repeat(§0, minmax(§1, §2))',
            'translate': 'translate(§0, §1)',
            'translate-x': 'translateX(§0)',
            'translate-y': 'translateY(§0)',
         },
         settings.templates || {}
      );
      this.alias = Object.assign({
            'test-color': 'val-color-1_hex-000000--val-color-2_hex-ffffff--val-color-3_hex-ffaaaa--val-color-4_hex-aaaaff--val-color-5_hex-ffffaa--val-color-6_hex-ffaaff--val-color-7_hex-aaffaa--val-color-8_hex-aaffff',
            'test-set1': 'br1_solid--color_black--px20--py10',
            'test-set2': 'br1_solid--color_white--px20--py10',
            'test-br1': 'br1_solid--color_black',
            'test-br2': 'br1_solid--color_white',
            /* -------------------------------------------------------------------------------------- */
            'teaser-lc': 'lc_§0--bo_vertical--text-overflow_ellipsis--d_-webkit-box--overflow_hidden',
            /* -------------------------------------------------------------------------------------- */
            'c-var': 'c_var-color-§0',
            'bg-var': 'bg_var-color-§0',
            /* -------------------------------------------------------------------------------------- */
            /* con_1200 = max-width: 1200 */
            'con': 'max-width§0px--m_auto--box-sizing_border-box--container-type_inline-size',
            /* -------------------------------------------------------------------------------------- */
            'flex-layout': 'd_flex--fd_row--fw_wrap--jc_start--ac_stretch--ai_stretch--container-type_inline-size',
            /* -------------------------------------------------------------------------------------- */
            'fcol25': 'f_1_1--flex-basis100p_cd4int--max-width100p_cd4int--box-sizing_border-box',
            'fcol33': 'f_1_1--flex-basis100p_cd3int--max-width100p_cd3int--box-sizing_border-box',
            'fcol50': 'f_1_1--flex-basis100p_cd2int--max-width100p_cd2int--box-sizing_border-box',
            'fcol66': 'f_1_1--flex-basis100p_cd3int_cm2int--max-width100p_cd2int--box-sizing_border-box',
            'fcol75': 'f_1_1--flex-basis100p_cd4int_cm3int--max-width100p_cd2int--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            /* fcol25gx1_20 = gap 20px */
            'fcol25gx1': 'f_1_1--flex-basis100p_cd4int_cs§0--max-width100p_cd4int_cs§0_cd2int_cm1int--box-sizing_border-box',
            'fcol25gx3': 'f_1_1--flex-basis100p_cd4int_cs§0--max-width100p_cd4int_cs§0_cd4int_cm3int--box-sizing_border-box',
            'fcol33gx2': 'f_1_1--flex-basis100p_cd3int_cs§0--max-width100p_cd3int_cs§0_cd3int_cm2int--box-sizing_border-box',
            'fcol50gx1': 'f_1_1--flex-basis100p_cd2int_cs§0--max-width100p_cd2int_cs§0_cd2int_cm1int--box-sizing_border-box',
            'fcol66gx1': 'f_1_1--flex-basis100p_cd3int_cm2int_cs§0--max-width100p_cd2int_cs§0_cd2int_cm1int--box-sizing_border-box',
            'fcol75gx1': 'f_1_1--flex-basis100p_cd4int_cm3int_cs§0--max-width100p_cd2int_cs§0_cd2int_cm1int--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'fcol100': 'f_1_1_100p--box-sizing_border-box',
            'fcolauto': 'f_1_1_auto--box-sizing_border-box',
            /* -------------------------------------------------------------------------------------- */
            'grid-layout': 'd_grid--tpl-grid-layout-cols-standard_grid-template-columns_var-layout-gap_var-layout-content_var-layout-outside--tpl-grid-layout-rows-standard_grid-template-rows_var-layout-gap--tpl-var_val-grid-layout-spacing_val-container-spacing_var-layout-gap--fn-calc_py_var-grid-layout-spacing_op-div_2--container-type_inline-size',
            'grid-layout-val': 'd_grid--tpl-grid-layout-cols-standard_grid-template-columns_§0_§1_§2--tpl-grid-layout-rows-standard_grid-template-rows_§0--container-type_inline-size',
            'grid-layout-main-gap': 'tpl-var_val-grid-layout-spacing_val-container-spacing_var-layout-gap--fn-calc_py_var-grid-layout-spacing_op-div_2',
            'layout-gap': 'gap_var-layout-gap',
            /* -------------------------------------------------------------------------------------- */
            /* -------------------------------------------------------------------------------------- */
            'grid-brick-layout': 'd_grid--tpl-repeat_gtc_12_1fr--gap_var-layout-gap--container-type_inline-size',
            'gcolx1': 'gc_span_1',
            'gcolx2': 'gc_span_2',
            'gcolx3': 'gc_span_3',
            'gcolx4': 'gc_span_4',
            'gcolx5': 'gc_span_5',
            'gcolx6': 'gc_span_6',
            'gcolx7': 'gc_span_7',
            'gcolx8': 'gc_span_8',
            'gcolx9': 'gc_span_9',
            'gcolx10': 'gc_span_10',
            'gcolx11': 'gc_span_11',
            'gcolx12': 'gc_span_12',
            'gcol25': 'gc_span_3',
            'gcol33': 'gc_span_4',
            'gcol50': 'gc_span_6',
            'gcol66': 'gc_span_8',
            'gcol75': 'gc_span_9',
            'gcol100': 'gc_span_12',
            'growx1': 'gr_span_1',
            'growx2': 'gr_span_2',
            'growx3': 'gr_span_3',
            'growx4': 'gr_span_4',
            'growx5': 'gr_span_5',
            'growx6': 'gr_span_6',
            'growx7': 'gr_span_7',
            'growx8': 'gr_span_8',
            'growx9': 'gr_span_9',
            'growx10': 'gr_span_10',
            'growx11': 'gr_span_11',
            'growx12': 'gr_span_12',
            /* -------------------------------------------------------------------------------------- */
            'clamp-font-size': 'tpl-clamp-size-standard_font-size_var-cfs-font-size_var-cfs-width',
            'btn': 'px15--py10--cursor_pointer--br3_solid_var-btn-br-color',
            'hide': 'pos_absolute--h1px--w1px--of_hidden--tpl-rect_clip_1px_1px_1px_1px--ws_nowrap',
            'show': 'd_initial--pos_static--h_auto--w_auto--of_visible--clip_auto--ws_normal',
            'focus': 'target-pseudo-class-focus',
            'before': 'target-pseudo-element-before--content_sq-str',
            'after': 'target-pseudo-element-after--content_sq-str',
            'overlay-background': 'pos_fixed--w100dvw--h100dvh--tpl-rgba_bg_0_0_0_50c--z_-2',
            'overlay-foreground': 'pos_absolute--tpl-rgba_bg_255_255_255_100c--z_-1--py40--fn-calc_w_100p_op-add_op-op_40pxrem_op-mul_2int_op-cp',
            'overlay-wrapper': 'pos_fixed--t50p--l50p--d_flex--tpl-translate_transform_-50p_-50p--jc_center--ai_center',
            'center': 'pos_absolute--t50p--l50p--fn-translate_transform_-50p_op-c_-50p',
         },
         settings.alias || {}
      );
      this.shorts = Object.assign({
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
            'pos': 'position',
            'w': 'width',
            'ws': 'white-space',
            'maxw': 'max-width',
            'minw': 'min-width',
            'h': 'height',
            'maxh': 'max-height',
            'minh': 'min-height',
            'c': 'color',
            'cur': 'cursor',
            'bg': 'background',
            'bg-c': 'background-color',
            'br': 'border',
            'br-t': 'border-top',
            'br-r': 'border-right',
            'br-b': 'border-bottom',
            'br-l': 'border-left',
            'brr': 'border-radius',
            'brr-t': ['border-top-left-radius', 'border-top-right-radius'],
            'brr-r': ['border-top-left-radius', 'border-bottom-left-radius'],
            'brr-b': ['border-bottom-left-radius', 'border-bottom-right-radius'],
            'brr-l': ['border-top-left-radius', 'border-bottom-left-radius'],
            'brr-tl': 'border-top-left-radius',
            'brr-tr': 'border-top-right-radius',
            'brr-bl': 'border-bottom-left-radius',
            'brr-br': 'border-bottom-right-radius',
            't': 'top',
            'r': 'right',
            'l': 'left',
            'b': 'bottom',
            'fs': 'font-size',
            'lh': 'line-height',
            'f': 'flex',
            'fd': 'flex-direction',
            'fw': 'flex-wrap',
            'ai': 'align-items',
            'as': 'align-self',
            'ac': 'align-content',
            'jc': 'justify-content',
            'o': 'order',
            'of': 'overflow',
            'g': 'grid',
            'gta': 'grid-template-areas',
            'gtc': 'grid-template-columns',
            'gtr': 'grid-template-rows',
            'ga': 'grid-area',
            'gc': 'grid-column',
            'gr': 'grid-row',
            'd': 'display',
            'ca': '+',
            'cs': '-',
            'cm': '*',
            'cd': '/',
            'start': 'flex-start',
            'end': 'flex-end',
            'between': 'space-between',
            'around': 'space-around',
            'lc': ['line-clamp', '-webkit-line-clamp'],
            'bo': ['box-orient', '-webkit-box-orient'],
            'z': 'z-index',
            'ta': 'text-align',
            'tt': 'target-tag',
            'tc': 'target-class',
            'ti': 'target-id',
            'tct': 'target-close-tag',
            'tcc': 'target-close-class',
            'tci': 'target-close-id',
            'tw': 'target-wildcard',
            'tn': 'target-next',
            'twt': 'target-wildcard-tag',
            'twc': 'target-wildcard-class',
            'twi': 'target-wildcard-id',
            'tnt': 'target-next-tag',
            'tnc': 'target-next-class',
            'tni': 'target-next-id',            
            'ptt': 'parent-tag',
            'ptc': 'parent-class',
            'pti': 'parent-id',
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
      let isCloseTag = false;
      cssClasses.forEach((cssClass, cssClassIndex) => {

         const cssClassUse = cssClass;

         let parts = [];
         cssClass.split('--').forEach((part, partIndex) => {
            const aliasSubParts = part.split('_');
            const aliasName = aliasSubParts.shift();
            if (this.alias[aliasName]) {
               const aliasRawData = this.alias[aliasName];
               const aliasConvert = this.fillAlias(aliasRawData, aliasSubParts);
               parts.push(...aliasConvert.split('--'));
            } else {
               parts.push(...[part]);
            }
         });
         let query = '';
         let styles = '';
         let target = '';
         let fromParent = '';
         parts.forEach((part, partIndex) => {
            if (part.startsWith('parent')) {
                  const propertyName = part.substring(7)
                                           .replace(/pseudo-class-/g, ':')  
                                           .replace(/pseudo-element-/g, '::') 
                                           .replace(/close-tag-/g, '')
                                           .replace(/tag-/g, ' ')
                                           .replace(/close-class-/g, '.')
                                           .replace(/class-/g, ' .')
                                           .replace(/close-id-/g, '#') 
                                           .replace(/id-/g, ' #') 
                                           .replace(/wildcard-/g, ' *')
                                           .replace(/next-/g, ' >');   
                  fromParent += `${propertyName}`;
            } else if (part.startsWith('target')) {
                        isCloseTag = part.includes('close-tag-');
                  const propertyName = part.substring(7)
                                           .replace(/pseudo-class-/g, ':')  
                                           .replace(/pseudo-element-/g, '::') 
                                           .replace(/close-tag-/g, '')
                                           .replace(/tag-/g, ' ')
                                           .replace(/close-class-/g, '.')
                                           .replace(/class-/g, ' .')
                                           .replace(/close-id-/g, '#') 
                                           .replace(/id-/g, ' #') 
                                           .replace(/wildcard-/g, ' *')
                                           .replace(/next-/g, ' >');   
                  target += `${propertyName}`;
            } else if (part.startsWith('cfn')) {
               const fnRaw = part.substring(4);
               const subParts = fnRaw.split('_');
               const fnName = subParts.shift();
               const property = subParts.shift();
               const fnVar = subParts.join(", ");
               let result = '';
               switch (fnName)
                  {
                     case 'clamp':
                        result = eval(`this.clampBuilder(${fnVar});`);
                     break;
                  }
               styles += ` ${property}: ${result} !important;`;
            } else {
               const subParts = part.split('_');
               const convertedSubPartsData = [];
               subParts.forEach((subPart, subPartIndex) => {
                  convertedSubPartsData.push(this.convertSubPartData(subPart));
               });
               const mainInstruction = convertedSubPartsData.shift();
               const instructions = convertedSubPartsData;
               if (subParts[0].startsWith('fn')) {
                  const fn = mainInstruction.property.substring(3);
                  const propertiesData = convertedSubPartsData.shift().property;
                  const properties = Array.isArray(propertiesData) ? propertiesData : [propertiesData];
                  /* ---------- */
                     properties.forEach((property) => {                        
                        styles += ` ${property}: ${fn}(`;
                        instructions.forEach((instruction, instructionIndex) => {
                           styles += `${instruction.property ??  ''}${instruction.number ??  ''}${instruction.unit ??  ''}`;
                        });
                        styles += `) !important;`;    
                     });
                     /* ---------- */
                 
               } else if (subParts[0].startsWith('tpl')) {
                  const tpl = this.templates[subParts[0].substring(4)];
                  const propertyName = convertedSubPartsData.shift()['property'];                  
                  const val = this.fillTemplate(tpl, convertedSubPartsData);
                  styles += ` ${propertyName}: ${val} !important;`;               
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
                        query += (convProperty === 'media') ? `@${convProperty} (min-width: ${mainInstruction.number}${mainInstruction.unit}) ` : `@${convProperty} (min-inline-size: ${mainInstruction.number}${mainInstruction.unit}) `;
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
                        styles += ` ${property}: calc(${mainInstruction.number}${mainInstruction.unit}`;
                        instructions.forEach((instruction, instructionIndex) => {
                           styles += ` ${instruction.property} ${instruction.number}${instruction.unit}`;
                        });
                        styles += `) !important;`;
                     });
                  } else if (instructions.length > 0 && mainInstruction.number && (mainInstruction.unit || mainInstruction.unit === '')) {
                     const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                     /* ---------- */
                     properties.forEach((property) => {  
                        styles += ` ${property}: ${mainInstruction.number}${mainInstruction.unit} `;
                        instructions.forEach((instruction, instructionIndex) => {
                           styles += ` ${instruction.property}`;
                        });
                        styles += ` !important;`;   
                     });
                     /* ---------- */
                  } else if (instructions.length > 0) {
                     const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                     /* ---------- */
                     properties.forEach((property) => {                        
                        styles += ` ${property}:`;
                        instructions.forEach((instruction, instructionIndex) => {
                           styles += instruction.property ? ` ${instruction.property}` : ` ${instruction.number}${instruction.unit}`;
                        });
                        styles += ` !important;`;      
                     });
                     /* ---------- */
                  } else {
                     const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
                     properties.forEach((property) => {
                        styles += ` ${property}: ${mainInstruction.number}${mainInstruction.unit} !important;`;
                     });
                  }
               }               
            }

         });
         if(isCloseTag) {
            styles = `${fromParent} ` + `${target}` + (this.prefix ? `.${this.prefix}--${cssClassUse}` : `.${cssClassUse}`) + ` {` + styles;
         } else {
            styles = `${fromParent} ` + (this.prefix ? ` .${this.prefix}--${cssClassUse}` : `.${cssClassUse}`) + `${target}` + ` {` + styles;
         }
         styles += ` }`;
         data.push(query !== '' ? `${query}{ ${styles} }` : styles);
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
   fillAlias(tpl, data) {
      let result = tpl;

      for (let i = 0; i < data.length; i++) {
         const entry = data[i];
         const placeholder = new RegExp(`§${i}`, 'g');

         let replacement = '';
         replacement += entry ?? '';
         result = result.replaceAll(placeholder, replacement);
      }

      return result;
   }

   convertSubPartData(subPart) { 
      if (subPart.startsWith('op-')) {
         const propertyName = subPart.substring(3);
         switch (propertyName) {
            case 'op':
               return {
                  property: '(',
                  number: null,
                  unit: null
               };
            break;
            case 'cp':
               return {
                  property: ')',
                  number: null,
                  unit: null
               };
            break;
            case 'add':
            case 'ca':
               return {
                  property: ' + ',
                  number: null,
                  unit: null
               };
            break;
            case 'sub':
            case 'cs':
               return {
                  property: ' - ',
                  number: null,
                  unit: null
               };
            break;
            case 'div':
            case 'cd':
               return {
                  property: ' / ',
                  number: null,
                  unit: null
               };
            break;
            case 'mul':
            case 'cm':
               return {
                  property: ' * ',
                  number: null,
                  unit: null
               };
            break;
            case 'p':
               return {
                  property: '.',
                  number: null,
                  unit: null
               };
            break;
            case 'c':
               return {
                  property: ', ',
                  number: null,
                  unit: null
               };
            break;
            case 'sq':
               return {
               property: `'`,
                  number: null,
                  unit: null
               };
            break;
            case 'dq':
               return {
                  property: '"',
                  number: null,
                  unit: null
               };
            break;
         }
      } else if (subPart.startsWith('str-')) {
         const propertyName = subPart.substring(4);
         return {
            property: `${propertyName}`,
            number: null,
            unit: null
         };
      } else if (subPart.startsWith('sq-str')) {
         const propertyName = subPart.substring(7);
         return {
            property: `'${propertyName}'`,
            number: null,
            unit: null
         };
      } else if (subPart.startsWith('dq-str')) {
         const propertyName = subPart.substring(7);
         return {
            property: `"${propertyName}"`,
            number: null,
            unit: null
         };
      } else if (subPart.startsWith('val-')) {
         const propertyName = this.shorts[subPart.substring(4)] || subPart.substring(4);
         return {
            property: `--${propertyName}`,
            number: null,
            unit: null
         };
      } else if (subPart.startsWith('var-')) {
         const propertyName = this.shorts[subPart.substring(4)] || subPart.substring(4);
         return {
            property: `var(--${propertyName})`,
            number: null,
            unit: null
         };
      } else if (subPart.startsWith('hex-')) {
         const propertyName = this.shorts[subPart.substring(4)] || subPart.substring(4);
         return {
            property: `#${propertyName}`,
            number: null,
            unit: null
         };
      } else if (subPart.startsWith('uc-')) {
         const propertyName = this.shorts[subPart.substring(3)] || subPart.substring(3);
         return {
            property: `\${propertyName}`,
            number: null,
            unit: null
         };
      } else if (subPart.startsWith('qstr-')) {
         const propertyName = subPart.substring(5).replace(/-/g, ' ');
         return {
            property: `"${propertyName}"`,
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
            number = (unit === 'c') ? number / 100 : number;
            number = (unit === 'k') ? number / 1000 : number;
            unit = (unit === 'p') ? '%' : unit;
            unit = (unit === 'int') ? '' : unit;
            unit = (unit === 'c') ? '' : unit;
            unit = (unit === 'k') ? '' : unit;
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
         number = (unit === 'c') ? number / 100 : number;
         number = (unit === 'k') ? number / 1000 : number;
         unit = (unit === '') ? 'rem' : unit;
         unit = (unit === 'p') ? '%' : unit;
         unit = (unit === 'int') ? '' : unit;
         unit = (unit === 'c') ? '' : unit;
         unit = (unit === 'k') ? '' : unit;

         return {
            property: property,
            number: number,
            unit: unit
         };
      }
   }
   /* https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/ */
   clampBuilder( minWidthPx, maxWidthPx, minFontSizePx, maxFontSizePx ) {
     const minFontSize = minFontSizePx / 16; 
     const maxFontSize = maxFontSizePx / 16; 
     const root = document.querySelector( "html" );
     const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );

     const minWidth = minWidthPx / pixelsPerRem;
     const maxWidth = maxWidthPx / pixelsPerRem;

     const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
     const yAxisIntersection = -minWidth * slope + minFontSize

     return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
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

/* *********************************************** */
/* AddOn */
class CSSFVars {
    constructor(prefix = '', breakpoints = [576, 768, 992, 1200, 1400]) {
        this.prefix = prefix;
        this.breakpoints = breakpoints;
        this.generateAndApplyStyles();
    }

    formatNumber(num) {
        return parseFloat(num.toFixed(4)).toString();
    }

    generateStyles() {
        const styles = [':root {'];
        
        for (let i = -200; i <= -11; i++) {
            this.addSizeVariable(styles, i);
        }
        for (let i = -10; i <= 10; i += 0.5) {
            this.addSizeVariable(styles, i);
        }
        for (let i = 11; i <= 1000; i++) {
            this.addSizeVariable(styles, i);
        }

        this.breakpoints.forEach(breakpoint => {
            for (let i = 0; i <= 300; i++) {
                const baseSize = i / 16;
                if (i <= 16) {
                  styles.push(`  --clamp-${breakpoint}-size-${i}:  ${this.clampBuilder(-768, breakpoint, 0, baseSize)};`);
                  styles.push(`  --clamp-${breakpoint}-size-n${i}: ${this.clampBuilderNegative(-768, breakpoint, 0, baseSize)};`);
                } else {
                  styles.push(`  --clamp-${breakpoint}-size-${i}:  ${this.clampBuilder(-576, breakpoint, 1, baseSize)};`);
                  styles.push(`  --clamp-${breakpoint}-size-n${i}: ${this.clampBuilderNegative(-576, breakpoint, 1, baseSize)};`);
                }
                /*
                const baseSize = i * 0.0625;
                if (i <= 16) {
                    styles.push(`  --clamp-${breakpoint}-size-${i}: ${this.formatNumber(baseSize)}rem;`);
                    styles.push(`  --clamp-${breakpoint}-size-n${i}: ${this.formatNumber(-Math.abs(baseSize))}rem;`);
                } else {
                    const maxSize = baseSize;
                    const minSize = 1; 
                    const slope = ((maxSize - minSize) / (breakpoint / 16)) * 100;
                    styles.push(`  --clamp-${breakpoint}-size-${i}: clamp(${minSize}rem, ${minSize}rem + ${this.formatNumber(slope)}vw, ${this.formatNumber(maxSize)}rem);`);
                    styles.push(`  --clamp-${breakpoint}-size-n${i}: clamp(${this.formatNumber(-Math.abs(maxSize))}rem, ${-Math.abs(minSize)}rem + ${this.formatNumber(-Math.abs(slope))}vw, ${-Math.abs(minSize)}rem);`);
                }
                */
            }
        });
        
        styles.push('}');
        return styles;
    }

    addSizeVariable(styles, i) {
        const pixelValue = i / 16;
        const formattedValue = this.formatNumber(pixelValue);
        const variableName = i % 1 === 0 ? `${Math.abs(i)}` : `${Math.abs(i)}`.replace('.', '-');
        
        if (i < 0) {
            styles.push(`  --size-n${variableName}: ${formattedValue}rem;`);
        } else {
            styles.push(`  --size-${variableName}: ${formattedValue}rem;`);
        }
    }

    applyStylesToDOM(styles) {
        const styleClassPrefix = this.prefix ? `${this.prefix}` : `cssf-vars`;
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

    generateAndApplyStyles() {
        const styles = this.generateStyles();
        this.applyStylesToDOM(styles);
    }
   /* https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/ */ 
   clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
     const root = document.querySelector( "html" );
     const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );

     const minWidth = minWidthPx / pixelsPerRem;
     const maxWidth = maxWidthPx / pixelsPerRem;

     const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
     const yAxisIntersection = -minWidth * slope + minFontSize

     return `clamp( ${ this.formatNumber(minFontSize) }rem, ${ this.formatNumber(yAxisIntersection) }rem + ${ this.formatNumber(slope * 100) }vw, ${ this.formatNumber(maxFontSize) }rem )`;
   }
   clampBuilderNegative( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
     const root = document.querySelector( "html" );
     const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );

     const minWidth = minWidthPx / pixelsPerRem;
     const maxWidth = maxWidthPx / pixelsPerRem;

     const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
     const yAxisIntersection = -minWidth * slope + minFontSize

     /* return `clamp( -${ maxFontSize }rem, -${ yAxisIntersection }rem + -${ slope * 100 }vw, -${ minFontSize }rem )`; */
     return `clamp( ${ this.formatNumber(-Math.abs(maxFontSize)) }rem, ${ this.formatNumber(-Math.abs(yAxisIntersection)) }rem + ${ this.formatNumber(-Math.abs(slope * 100)) }vw, ${ this.formatNumber(-Math.abs(minFontSize)) }rem )`;
   }
}

new CSSFVars();