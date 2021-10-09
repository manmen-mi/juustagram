import { ref } from "vue";

const favList = ref<Array<number>>([]);

export default function useFavStore() {

    favList.value = JSON.parse(localStorage.getItem('fav_list') ?? '[]');

    const favorite = (id: number) => {
        if (favList.value.includes(id)) return;

        favList.value.push(id);
        localStorage.setItem('fav_list', JSON.stringify(favList.value));
    }

    const unFavorite = (id: number) => {
        if (!favList.value.includes(id)) return;

        favList.value = favList.value.filter(i => i !== id);
        localStorage.setItem('fav_list', JSON.stringify(favList.value));
    }

    return {
        favList,
        favorite,
        unFavorite,
    }
}