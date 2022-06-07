import "../styles/components/UserIdentity.css";

function UserIdentity({name})
{
    return (
        <section className="userIdentity">
            <h1 className="userIdentity__title">Bonjour <span className="userIdentity__title__name">{name}</span></h1>
            <p className="userIdentity__catchphrase">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
}

export default UserIdentity;