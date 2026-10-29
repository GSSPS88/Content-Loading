const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated_bg');
const animated_text = document.querySelectorAll('.animated_text');

setTimeout(showContent,2000);

function showContent() {
    header.innerHTML = `<img src="img/blc.png" alt="">`;
    title.innerHTML =   `Balenciaga Track`;
    description.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, commodi.`;
    profile_img.innerHTML = `<img src="img/xavier.jpg" alt="">`;
    seller_name.innerHTML = `Xavier`;
    price.innerHTML = `Price: 156,048.98 INR`;

    animated_bg.forEach(el =>el.classList.remove("animated_bg"));
    animated_text.forEach(el=>el.classList.remove("animated_text"));
}
