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