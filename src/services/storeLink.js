//buscar os links salvos.
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves =JSON.parse(myLinks) || [];

    return linksSaves;
}







//salvar um link no localStorage.
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);
    // se ja tiver um link salvo com algum ID eu nao vou deixar dublicar
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if (hasLink){
        console.log('esse link ja existe na sua lista')
        return;
    }
    //adicionar esse novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucesso');
}

//deletar algum link salvo.
export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return(item.id !== id)
    })
    localStorage.setItem('@seuLink', JSON.stringify(myLinks))
    console.log("link deletado com sucesso!")

    return myLinks;
}