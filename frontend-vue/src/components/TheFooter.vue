<template>
  <div>
    <footer>
      <div class="partFooter">
        <img src="./../assets/logoEstigma.png" alt="" />
      </div>
      <div class="partFooter">
        <h4>Servicios</h4>
        <a href="#">Services 1</a>
        <a href="#">Services 2</a>
        <a href="#">Services 3</a>
      </div>
      <div class="partFooter">
        <h4>Acerca de</h4>
        <a href="#">About 1</a>
        <a href="#">About 2</a>
        <a href="#">About 3</a>
      </div>
      <div class="partFooter">
        <h4>Redes sociales</h4>
        <div class="social-media">
          <b-icon id="b-icon" icon="facebook"></b-icon>
          <b-icon-twitter id="b-icon"></b-icon-twitter>
          <b-icon id="b-icon" icon="instagram"></b-icon>
          <b-icon-youtube id="b-icon"></b-icon-youtube>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>
footer {
  background: #f2f2f2;
  padding: 60px 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
}

.partFooter {
  width: 20%;
  text-align: center;
}

.partFooter h4 {
  color: #1d273b;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
}

.partFooter a {
  display: block;
  text-decoration: none;
  color: #5d6678;
  font-weight: 300;
  transition: color 0.3s ease-in-out;
  margin-bottom: 10px;
}

.partFooter a:hover {
  color: #1fde82;
}

.partFooter img {
  width: 70%;
}

.social-media #b-icon {
  font-size: 20px;
  display: inline-block;
  color: #adb6c7;
  border: 1px solid #adb6c7;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  line-height: 36px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  transition: all ease-in-out 0.3s;
  margin-right: 5px;
}

.social-media #b-icon:hover {
  color: #fff;
  background-color: #1fde82;
  border-color: #1fde82;
}
</style>
