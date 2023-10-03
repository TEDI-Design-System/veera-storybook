import fs from 'fs';

const release = () => {
    const sourceFolder = "dist";
    const parentFolder = "release";
    const folderName = `${process.env.npm_package_version}`;
    try {
        if (!fs.existsSync(parentFolder)) {
            fs.mkdirSync(parentFolder);
        }
        fs.cpSync(sourceFolder, `${parentFolder}/${folderName}`, { recursive: true });
    } catch (err) {
        console.error(err);
    }
};

release();