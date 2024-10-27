import { readFile, unlink, writeFile } from "fs/promises";

const exec = async () => {

    await unlink('./teste.txt');


    // const fileName = './teste.txt';
    //  const  fileContent = await readFile('./teste.txt', {encoding: 'utf8'});
    //  const list = fileContent.split('\n');
    //  list.push('fulano');

    //  const listTxt = list.join('\n');

    //  await writeFile('./teste.txt', listTxt)
}

exec();