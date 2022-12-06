<template>
  <div>
    <section class="about-us">
      <div class="contenedor1">
        <h2 class="titulo">We provide a wide range</h2>
        <div class="contenedor-articulo">
          <div class="articulo" data-aos="zoom-in-right">
            <b-icon class="b-icon" icon="vector-pen"></b-icon>
            <h3>Graphic design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              accusamus reiciendis ab maxime animi alias ipsam ex debitis dolor
              provident!
            </p>
            <a href="#">Read more ---></a>
          </div>

          <div class="articulo" data-aos="zoom-in-right">
            <b-icon class="b-icon" icon="code-slash"></b-icon>
            <h3>Web design</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              alias? Cumque placeat delectus odit architecto unde eveniet
              accusantium velit quas.
            </p>
            <a href="#">Read more ---></a>
          </div>

          <div class="articulo" data-aos="zoom-in-right">
            <b-icon class="b-icon" icon="gear"></b-icon>
            <h3>Video production</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              alias? Cumque placeat delectus odit architecto unde eveniet
              accusantium velit quas.
            </p>
            <a href="#">Read more ---></a>
          </div>

          <div class="articulo" data-aos="zoom-in-right">
            <b-icon class="b-icon" icon="bar-chart"></b-icon>
            <h3>SEO</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              alias? Cumque placeat delectus odit architecto unde eveniet
              accusantium velit quas.
            </p>
            <a href="#">Read more ---></a>
          </div>

          <div class="articulo" data-aos="zoom-in-right">
            <b-icon class="b-icon" icon="pie-chart"></b-icon>
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              alias? Cumque placeat delectus odit architecto unde eveniet
              accusantium velit quas.
            </p>
            <a href="#">Read more ---></a>
          </div>

          <div class="articulo" data-aos="zoom-in-right">
            <b-icon class="b-icon" icon="chat"></b-icon>
            <h3>Inphografics</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              alias? Cumque placeat delectus odit architecto unde eveniet
              accusantium velit quas.
            </p>
            <a href="#">Read more ---></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #1d273b;
  font-weight: 300;
}

.contenedor1 {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  padding: 60px 0;
}

h1 {
  font-size: 50px;
}

.titulo {
  font-size: 50px;
}

.about-us {
  background: #f2f2f2;
}

.contenedor-articulo {
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  justify-content: space-around;
}

.articulo {
  width: 29%;
  background: #fff;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 45px 30px 60px 30px;
  transition: 0.5s;
}

.articulo:hover {
  box-shadow: 0 4px 10px rgba(17, 29, 48, 0.26);
}

.articulo > .b-icon {
  font-size: 30px;
  color: #fff;
  background: #1fde82;
  display: inline-block;
  width: 70px;
  height: 70px;
  text-align: center;
  padding-top: 20px;
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(31, 222, 130, 0.46);
}

.articulo > h3 {
  font-size: 24px;
  margin-top: 30px;
}

.articulo > p {
  font-weight: 100;
  color: #5d6678;
  margin-top: 15px;
  padding-bottom: 20px;
}

.articulo > a {
  color: #5d6678;
  font-weight: 400;
  text-decoration: none;
}

.articulo > a:hover {
  color: #1fde82;
  transition: color 0.5s;
}
</style>





