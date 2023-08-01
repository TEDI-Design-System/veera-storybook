# e-service-design-system

## Importing tokens from Figma

Currently only Pearu has the Figma token export plugin (will probably be added to Bitbucket in near future), so ping him if new variables are added to Figma. Exported design tokens are in [design-token.json](/design-tokens.json) and token for scss files generation are in [tokens-for-scss.json](/tokens-for-scss.json)

## Generating scss from tokens

Running `npm run generate-scss` generates scss files from design-tokens. This inlcudes [veera-variables](/src/scss/veera-variables.scss) file with all the improted variables and [text-style mixins](/src/scss/mixins/_text-styles.scss) with all the text styles mixins that can be used when developing the components. Reference to the script to generates the scss files: [generateScssFiles.js](/scripts/generateScssFiles.js)

## Building css

To compile scss into css run `npm run build` (or `npm run build-scss`, which also regenerates the scss files). Scss gets compiled into one massive veera.css file that includes styles for all the components, but also into smaller component-based style files that can be used independently.

## Developing components

When developing new components, add components styles to new folder in [scss/components](/src/scss/components/) directory and create stories for the component to [stories](/src/stories/) folder. When creating component styles make sure to use css variables imported from Figma if possible. Storybook is used for viewing and developing the components. 

**Also make sure to have Prettier, ESlint and Stylelint plugins installed if developing in VS Code**

## Running storybook

`npm run storybook`
