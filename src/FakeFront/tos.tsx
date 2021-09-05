import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React, { ReactElement } from 'react'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface Props {
  open: boolean
  handleClose: () => void
}

export const tos = ({ open, handleClose }: Props): ReactElement => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {'Condition utilisation Delta Green Pizza'}
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText id="alert-dialog-slide-description"> */}
        <div>
          <h2 style={{ textAlign: 'justify' }}>
            Conditions d utilisation
          </h2>
          <p style={{ textAlign: 'justify' }}>
            Les présentes Conditions Générales de Vente décrivent le
            service de commande en ligne de la gamme de produits
            disponibles à notre boutique CHICKEN &amp; PIZZA et
            accessible via le site www.chickenpizzamonaco.com
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les présentes Conditions Générales de Vente (ci-après les
            « CGV ») s’appliquent à toute commande (ci-après «
            Commande ») d’un ou plusieurs produits (ci-après le ou les
            « Produit(s) ») passée par l’acheteur (ci-après le «
            Client ») sur le site marchand www.chickenpizzamonaco.com
            (ci-après le « Site « ), édité par la SCS ROCHER et Cie
            (ci-après « l’Editeur » ), auprès de notre boutique
            CHICKEN &amp; PIZZA (ci-après le « Vendeur).
          </p>
          <p style={{ textAlign: 'justify' }}>
            La commande en ligne sur le Site est réservée aux Clients
            âgés d’au moins 13 ans à la date de passation de la
            commande.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Le Vendeur se réserve le droit de modifier les CGV à tout
            moment. Dans tous les cas, les CGV applicables seront
            celles figurant sur le Site à la date de la Commande par
            le Client.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>Définitions</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Dans les présentes CGV, les mots ou expressions suivants
            auront les significations suivantes :
          </p>
          <p style={{ textAlign: 'justify' }}>
            - Les termes le « Vendeur » et la « Boutique » désignent
            la société d’exploitation de la boutique sous l’enseigne
            CHICKEN &amp; PIZZA sélectionné par le Client et auprès de
            laquelle la commande sera enregistrée et dont les
            coordonnées seront indiquées sur l’email confirmant la
            commande et sur le ticket de caisse délivré par
            CHICKEN&amp; PIZZA lors de la livraison des Produits.
          </p>
          <p style={{ textAlign: 'justify' }}>
            - Le terme « Commande » désigne le service, mis à
            disposition par l’Editeur, et l’ensemble du processus de
            commande en ligne de produits disponibles dans notre
            boutique. Le Client effectue le paiement de sa commande en
            ligne.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>1. Acceptation des CGV</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Le Client déclare avoir pris connaissance et accepté les
            présentes CGV avant la passation de sa Commande. Toute
            Commande d’un Produit sur le Site matérialise donc de la
            part du Client l’acceptation expresse des présentes CGV.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>2. Les Produits</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les produits proposés par notre boutique choisi par le
            Client sont ceux qui figurent dans le catalogue publié sur
            le Site le jour de la Commande, dans la limite toutefois
            des stocks disponibles.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les produits présentés à la vente sont susceptibles d’être
            modifiés ou supprimés par le Vendeur sans aucun préavis.
            Les photographies et illustrations présentées en ligne ne
            sont pas contractuelles.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>3. Création d’un compte</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Pour commander, le Client doit créer un compte qui lui
            permettra notamment d’accéder à l’historique de ses
            Commandes.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Lors de son inscription, le Client choisit un identifiant
            et un mot de passe auxquels il associe ses nom / prénoms,
            date de naissance, une adresse précise (numéro de
            bâtiment, d’étage, digicode) et un numéro de téléphone
            opérationnel afin de permettre au livreur de CHICKEN &amp;
            PIZZA de sa zone géographique de livrer la commande dans
            les meilleurs conditions et délais.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Il appartient au Client de garder ses identifiant et un
            mot de passe strictement confidentiels et de ne pas les
            communiquer à des tiers, afin d’éviter autant que possible
            tout risque d’intrusion de son compte Client et la
            passation de Commandes à son insu par des personnes non
            autorisées. Le Vendeur ne saurait être tenu responsable de
            toute utilisation du compte du Client par un tiers qui
            aurait eu accès à son identifiant et à son mot de passe de
            quelque manière que ce soit.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>4. Passation des Commandes</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Se rendre sur le Site{' '}
            <a href="http://www.chickenpizzamonaco.com/">
              www.chickenpizzamonaco.com
            </a>
            ,
          </p>
          <p style={{ textAlign: 'justify' }}>
            Créer un compte ou se connecter sur son compte avec son
            identifiant et son mot de passe
          </p>
          <p style={{ textAlign: 'justify' }}>
            Effectuer sa Commande en sélectionnant les Produits,
          </p>
          <p style={{ textAlign: 'justify' }}>
            Valider sa Commande après avoir vérifié le récapitulatif
            de sa Commande,
          </p>
          <p style={{ textAlign: 'justify' }}>Accepter les CGV,</p>
          <p style={{ textAlign: 'justify' }}>
            Effectuer en ligne le paiement de sa Commande
          </p>
          <p style={{ textAlign: 'justify' }}>
            La validation finale de la Commande entrainent acceptation
            par le Client des présentes CGV, la reconnaissance d’en
            avoir parfaite connaissance et la renonciation à se
            prévaloir de ses propres conditions d’achat ou de toutes
            autres conditions.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>5. Preuve de la Commande</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            La validation finale de la Commande vaudra preuve de
            l’intégralité de ladite Commande et vaudra exigibilité des
            sommes engagées par la Commande.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les registres informatisés du Vendeur, conservés dans les
            systèmes informatiques du Vendeur ou de son prestataire
            back office dans des conditions raisonnables de sécurité,
            seront considérés par le Vendeur et le Client comme preuve
            des communications, des commandes, des paiements et des
            transactions intervenus entre les parties.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>
              6. Annulation et modification d’une Commande
            </strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Selon les dispositions de l’article L121-20-2 3° du Code
            de la Consommation, le droit de rétractation applicable en
            matière de vente à distance ne peut être exercé dans le
            cas de la fourniture de biens qui du fait de leur nature
            sont susceptibles de se détériorer ou de se périmer
            rapidement.
          </p>
          <p style={{ textAlign: 'justify' }}>
            En application de ce texte, il est expressément indiqué
            que toute Commande sur le Site est ferme et définitive et
            que l’exercice du droit de rétractation est exclu.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les Commandes qui ont donc été définitivement validées ne
            sont pas annulables. Aucune marchandise ne peut être
            reprise ou échangée.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>7. Livraison des Produits</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les horaires du service de commande en ligne sont
            disponibles sur le Site au moment où le Client sélectionne
            la Boutique.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Une fois la commande validée, la livraison intervient dans
            un délai généralement de trente à quatre-vingt-dix
            minutes, sous réserve de variations dues à un fort nombre
            de commandes et sous réserve d’un cas de force majeure
            telle que défini par la jurisprudence. Tout délai est donc
            mentionné à titre indicatif et n’est pas contractuel.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>8. Réclamations</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Toute question ou réclamation concernant les Produits
            livrés devra être faite dans un délai maximum de
            vingt-quatre (24) heures après la livraison desdits
            Produits, auprès du Vendeur, par courrier, à l’adresse
            figurant sur le ticket de caisse et sur l’email de
            confirmation envoyé lors de toute Commande. Passé ce
            délai, aucune question ni aucune réclamation ne pourra
            être prise en compte.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>9. Prix</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les prix figurants sur les pages de Commande en ligne du
            Site sont des prix TTC (toutes taxes comprises) en euro
            tenant compte de la TVA applicable au jour de la Commande.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Le Vendeur se réserve le droit de modifier ses prix à tout
            moment, étant toutefois entendu que le prix figurant au
            catalogue le jour de la Commande sera le seul applicable.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>10. Modalités de paiement de la Commande</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les Commandes effectuées sur le Site sont payables en
            carte bancaire uniquement.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les paiements par carte bancaire sont réalisés par le
            biais d’un système fiable et sécurisé de paiement qui
            garantit la préservation du caractère confidentiel des
            numéros de carte bancaire par des procédures de protection
            et de cryptologie.
          </p>
          <p>
            <strong>11. Responsabilité</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            L’Editeur s’engage à assurer un accès au service de prise
            de commande en ligne optimal. Toutefois, l’Editeur ne sera
            pas tenu d’assurer le fonctionnement du site Internet
            www.chickenpizzamonaco.com ni du service de prise de
            commande en cas de force majeure telle que définie par la
            jurisprudence.
          </p>
          <p style={{ textAlign: 'justify' }}>
            L’Editeur décline en outre toute responsabilité en cas
            d’interruption du site Internet
            www.chickenpizzamonaco.com, de survenance de bugs ou
            d’erreurs de fonctionnement, ainsi qu’en cas de dommages,
            direct ou indirect, qu’elles qu’en soient les causes,
            origines, natures ou conséquences, provoqués à raison de
            l’accès de quiconque au site Internet
            www.chickenpizzamonaco.com ou de l’impossibilité d’y
            accéder, y compris les risques inhérents à l’utilisation
            du réseau Internet tel que perte de données, intrusion,
            virus, rupture du service ou tout autre risque assimilé.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les informations présentes sur le site Internet
            www.chickenpizzamonaco.com sont mentionnées à titre
            purement indicatif, sous réserve d’erreur ou d’omission.
          </p>
          <p style={{ textAlign: 'justify' }}>
            La responsabilité de l’Editeur ou du Vendeur ne saurait
            être engagée si l’inexécution ou la mauvaise exécution
            d’une commande est imputable au client ou à des
            contraintes techniques indépendantes de la volonté de
            l’Editeur ou du Vendeur. L’Editeur et le Vendeur ne
            sauraient notamment être tenus pour responsables, des
            dommages de toute nature tant matériels qu’immatériels qui
            pourraient résulter d’une mauvaise utilisation de
            l’identifiant ou du mode opératoire de passation de
            commande, du retard, de la perte ou de la mauvaise
            distribution d’un email, d’un sms, notamment de
            confirmation de commande, ni de son envoi ou non à une
            adresse électronique ou un numéro de téléphone erroné.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Le Client est informé que l’Editeur peut s’appuyer sur les
            compétences d’un prestataire extérieur pour gérer
            notamment l’ensemble de son back office et le paiement
            sécurisé des commandes en ligne. Le Client s’engage à ne
            jamais rechercher la responsabilité de l’Editeur et à agir
            directement auprès de ce prestataire en cas de litige
            survenu notamment à l’occasion de l’utilisation du module
            de paiement sécurisé. L’Editeur fera tous ses meilleurs
            efforts pour que l’adresse mail à laquelle contacter le
            prestataire soit disponible et facilement accessible.
          </p>
          <p>
            <strong>12. Protection des données personnelles</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les données personnelles collectées sur le Site sont
            nécessaires au traitement de la commande et pourront être
            communiquées aux partenaires du Mandataire sur acceptation
            expresse du Client.
          </p>
          <p style={{ textAlign: 'justify' }}>
            En application de l article 13 de la Loi num 1.165 du 23
            décembre 1993 modifiée, vous disposez d un droit d accés
            et de rectification sur les données vous concernant, le
            Client peut s’opposer à la communication de ces données à
            des tiers. L’exercice de ces droits est à effectuer auprès
            de : SCS ROCHER et Cie, avec un justificatif de votre
            identité (photocopie d’une pièce d’identité).
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>13. Mineurs</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            En application de l’ordonnance souveraine n° 2533 du
            15/10/1941 art. 8 et art.13, la vente d’alcool à des
            mineurs de moins de dix-huit (18) ans est interdite. Par
            conséquent, l’achat de tout produit à base d’alcool lors
            de la Commande, est formellement interdit aux mineurs de
            moins de dix-huit (18) ans. A cette occasion, une pièce
            d’identité pourra être demandée au Client lors de la
            livraison de sa Commande.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>14. Indivisibilité</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            La nullité d’une des clauses du présent contrat en
            application notamment d’une loi, d’un règlement ou à la
            suite d’une décision de justice n’entrainera pas la
            nullité des présentes CGV.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>15. Règlement des litiges</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Les présentes CGV sont soumises à la loi monégasque. En
            cas de litige, le Client s’adressera en priorité au
            Vendeur afin de trouver une solution amiable. A défaut, la
            compétence est attribuée aux tribunal de Monaco.
          </p>
        </div>
        {/* </DialogContentText> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
