import { CustomMaterialCommunityIcon, CustomMaterialIcon } from "@/components/CustomIcon"
import { FontAwesome6 } from "@expo/vector-icons"

export const Operations = [
    {
        title: "Área Pix",
        icon: <CustomMaterialIcon name="pix" color="black" />
    },
    {
        title: "Pagar",
        icon: <CustomMaterialCommunityIcon name="barcode" color="black" />
    },
    {
        title: "Pegar emprestado",
        icon: <FontAwesome6 name="hand-holding-dollar" size={24} color="black" />,
        extra: "R$15.000"
    },
    {
        title: "Tranferir",
        icon: <CustomMaterialCommunityIcon name="monitor-share" color="black" />
    },
    {
        title: "Recarga de celular",
        icon: <CustomMaterialIcon name="smartphone" color="black" />
    },
    {
        title: "Depositar",
        icon: <CustomMaterialIcon name="pix" color="black" />
    },
    {
        title: "Investir",
        icon: <CustomMaterialIcon name="signal-cellular-alt" color="black" />
    },
    
]

export const MORE = [
    {
        image: "https://backend.blog.nubank.com.br/wp-content/uploads/2024/02/homem-consultando-aplicativo-nubank-no-celular-e-segurando-cartao-de-credito.jpg?quality=100",
        title: "Nova experiência Nubank+",
        description: "Mais vantagens para aproveitar o seu dia a dia.",
        action: "Seja Nubank+",
        route: ""
    },
    {
        image: "https://img.odcdn.com.br/wp-content/uploads/2022/05/nubank-em-mais-um-rosto.jpg",
        title: "Área de Seguros do Nu",
        description: "Toda proteção para você e para quem você ama num só lugar",
        action: "Conhecer",
        route: ""
    },
    {
        image: "https://startups.com.br/wp-content/uploads/2022/01/nubank-cartao_divulgacao.jpg",
        title: "Indique o Nu para amigos",
        description: "Espalhe como é simples estar no controle.",
        action: "Indicar amigos",
        route: ""
    },
    {
        image: "https://s2-techtudo.glbimg.com/ZmYqpKy5tStKh_MeMQzWagRYw0c=/0x0:1920x1080/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/6/r/UAn5lDS6iBxfyItL4Mhw/design-sem-nome-2024-04-15t163830.601.png",
        title: "Traga seus dados",
        description: "Mais chances de limites e produtos com a sua cara.",
        action: "Saiba mais",
        route: ""
    },
    {
        image: "https://classic.exame.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-14-at-18.42.13.jpeg?quality=70&strip=info&w=1024",
        title: "Termos de uso",
        description: "Explicamos o que diz esse documento do Nubank",
        action: "Conhecer",
        route: ""
    },
    {
        image: "https://tm.ibxk.com.br/2023/02/13/13103639593039.jpg?ims=1200x675",
        title: "Nubank Auto",
        description: "Aproveite seu carro com toda tranquilidade.",
        action: "Simule agora",
        route: ""
    },
]