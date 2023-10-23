import fs from 'fs';

const release = () => {
  const distFolder = 'dist';
  const srcFolder = 'src';
  const releaseFolder = 'release';
  const versionFolder = `${process.env.npm_package_version}`;
  const scssFolder = `${releaseFolder}/${versionFolder}/scss`;
  try {
    if (!fs.existsSync(releaseFolder)) {
      fs.mkdirSync(releaseFolder);
    }
    if (fs.existsSync(`${releaseFolder}/${versionFolder}`)) {
      fs.rmSync(`${releaseFolder}/${versionFolder}`, { recursive: true, force: true });
    }
    fs.cpSync(distFolder, `${releaseFolder}/${versionFolder}`, { recursive: true });
    fs.mkdirSync(`${scssFolder}`);
    fs.cpSync(`${srcFolder}/scss`, scssFolder, { recursive: true });
    fs.cpSync(`design-tokens.json`, `${releaseFolder}/${versionFolder}/design-tokens.json`);
  } catch (err) {
    console.error(err);
  }
};

release();
