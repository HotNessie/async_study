const form = document.querySelector("#searchForm");

form.addEventListener('submit', async function (e) {
    try {
        e.preventDefault();
        //입력값을 받고 같은 페이지에서 사진을 보여줄거라 이벤트 종료
        const searchTerm = form.elements.query.value
        //console.dir(form)제출해서 form하위 elements 확인 input이름을
        const config = { params: { q: searchTerm } }
        //query로 저장했으니까 그거 찾아서 value값 받아오기
        const res = await axios.get(`url`, config)
        //api를 받아올 사이트에 input입력값 보내기 (쿼리가 어떻게 짜여있나 봐야됨)
        makeImages(res.data)
        form.elements.query.value = ""
    } catch (error) {
        console.log('error', error)
    }
})


const makeImages = (shows) => {

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            //이미지가 들어갈 칸 만들고
            img.src = result.show.image.medium;
            //이거도 역시 log값에 res.data  해서 가져올 값 찾은거
            document.body.append(img)
        }
    }
}