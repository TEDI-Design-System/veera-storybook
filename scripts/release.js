import fs from 'fs';

const release = () => {
  const distFolder = 'dist';
  const srcFolder = 'src';
  const releaseFolder = 'release';
  const versionFolder = `${process.env.npm_package_version}`;
  const scssFolder = `${releaseFolder}/${versionFolder}/scss`;
  try {
    if (fs.existsSync(releaseFolder)) {
      fs.rmSync(releaseFolder, { recursive: true, force: true });
    }
    fs.mkdirSync(releaseFolder);
    fs.cpSync(distFolder, `${releaseFolder}/${versionFolder}`, { recursive: true });
    fs.mkdirSync(`${scssFolder}`);
    fs.cpSync(`${srcFolder}/scss`, scssFolder, { recursive: true });
    fs.cpSync(`design-tokens.json`, `${releaseFolder}/${versionFolder}/design-tokens.json`);
  } catch (err) {
    console.error(err);
  }
};

release();
