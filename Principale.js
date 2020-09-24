class Etudier{
    constructor(id_etude,id_enseignant,id_salle,periode,id_matiere){
        this.id_etude = id_etude
        this.id_enseignant = id_enseignant
        this.id_salle = id_salle
        this.periode = periode
        this.id_matiere =id_matiere
    }
}

class Enseignant {
    constructor(id,nom,prenom,tel,grade,origine,adresse){
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.tel = tel 
        this.grade = grade
        this.origine = origine
        this.adresse = adresse
    }
}

class Matiere{
    constructor(id_matiere,libelle,semestre,id_enseignant){
        this.id_matiere = id_matiere
        this.libelle = libelle
        this.semestre = semestre
        this.id_enseignant = id_enseignant
    }
}
let Enseig = new Array()
let Mat = new Array()
let Etu = new Array()

let Enseignant1 = new Enseignant(12,"Diouf","Fatou",788688776,"B2","sous region","Sous region")
//tu repete la meme chose jusqu'a 10 enseignant en differenciant les valeurs evidement

let Matiere1 = new Matiere(123,"test test test  test ","semestre 3",12)
//tu repete la meme chose por Matiere jusqu'a 10 Matiere en differenciant les valeurs evidement

let Etude1 = new Etudier(123,12,15,"deux semestre",123)
//tu fais la meme chose pour Etudier

 Enseig[0] = Enseignant1
 //tu fais la meme chose jusqu'a 10 element dans le tableau

 Mat[0] = Matiere1
 //tu fais la meme chose

 Etu[0] = Etude1
 //tu fais la meme chose aussi

 //boucle pour chercher s'il existe une Fatou parmi les enseignant
    let compte = 0
 for (let i = 0; i < Enseig.length; i++) {
     if(Enseig[i].nom =="Diouf" && Enseig[i].prenom == "Fatou"){
            compte +=1    
     }
     if(compte !=0){
         alert("Oui!! nous avons un fatou parmi les Enseignants")
     }
     alert("Nous avons\t" +compte+ "\tinstance de Fatou Diouf ")
 }

 //boucle pour trouver les matiere enseigner par Fatou
    //on cherche d'abord l'id de Fatou 
   
        let id
    for (let i = 0; i < Enseig.length; i++) {
        if(Enseig[i].prenom =="Fatou" && Enseig[i].nom == "Diouf"){
                id = Enseig[i].id
                alert("id trouve\n alors nous passons a l'affichage")
                break   
        } 
    }
     //puis on cherche l'id correspondcand a la matiere
     for (let i = 0; i < Mat.length; i++) {
        if(id == Mat[i].id_enseignant){
            alert("Fatou Enseigne les Matiere\t"+Mat[i].libelle)
        } 
    }

    //fonction pour Ajouter_enseignant

    function Ajouter_enseignant() {
        
        var id = parseInt(prompt('donner l\'id de l\'enseignant'))
        var nom = prompt('donner le nom')
        var prenom = prompt('donner le prenom')
        var tel = parseInt(prompt('donner le numero de telephone'))
        var grade = prompt('Donner le grade de l\'enseignant')
        var origine = prompt('donner l\'origine')
        var adresse = prompt('donner son adresse')

        var m = Enseig.length
        var ajout = {id,nom,prenom,tel,grade,origine,adresse}
        var n = Enseig.push(ajout)

        if(m<n){
            alert("Enseignat ajouter avec succes")
        } else {
            alert("desoler!!!!!")
        }
        
    }
     //fonction pour Supprimer un enseignant

    function Supprimer_enseignant(){
        var index = parseInt(prompt("donner l'index de l'element a supprimer!!!"))
        var n = Enseig.length
       var sup =  Enseig.splice(index,1)
        if (n>Enseig.length){
            alert("suppression effectuer avec succes")
        } else {
            alert("Element non supprimer!!")
        }
         }

    //modifier un enseignant

    function Modifier_enseignant() {
        
        var n = parseInt(prompt('donner l\'index de l\'enseignant a modifier'))
        if (n >=Enseig.length){
            alert("desoler impossible de modifier ce champ!!!")
        } else {
        var id = parseInt(prompt('donner l\'id de l\'enseignant'))
        var nom = prompt('donner le nom')
        var prenom = prompt('donner le prenom')
        var tel = parseInt(prompt('donner le numero de telephone'))
        var grade = prompt('Donner le grade de l\'enseignant')
        var origine = prompt('donner l\'origine')
        var adresse = prompt('donner son adresse')
        
        for (let i = 0; i < Enseig.length; i++) {
         if(i==n){
             Enseig[i].id = id
             Enseig[i].nom = nom
             Enseig[i].prenom = prenom 
             Enseig[i].tel = tel
             Enseig[i].grade = grade 
             Enseig[i].origine = origine
             Enseig[i].adresse = adresse

             break
         }

        }
    }
        
    }

    //Afficher tout les enseignant
    function Affiche() {
        for (let i = 0; i < Enseig.length; i++) {
            alert("Enseignants\nid\t:"+Enseig[i].id+"\nNom:\t"+Enseig[i].nom+"\nPrenom\t"+Enseig[i].prenom+"\ntel:\t"+Enseig[i].tel+"\ngrade:\t"+Enseig[i].grade+"\norigine:\t"+Enseig[i].origine+"\nadresse:\t"+Enseig[i].adresse)               
        }
    }
    
    
    Ajouter_enseignant()
    Modifier_enseignant()
    Supprimer_enseignant()
    Affiche()
