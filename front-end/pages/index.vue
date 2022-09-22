<template>
   <div>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Check our NFT collections!</h1>
          <h2
            class="subtitle"
          >You can find some of the most popular NFT collections available for trading on their respective platforms 😃</h2>
        </div>
      </div>
    </section>
    <section class="main-content">
      <div class="container">
        <h1 class="title has-text-centered">Popular NFTs</h1>
        <div class="columns is-multiline">
          <div class="column is-half" v-for="pet in pets" :key="pet._id">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title is-centered">{{ pet.name }}</p>
              </header>
              <div class="card-content">
                <figure class="image is-3by2">
                  <img :src="`${pet.imageUrl}`" />
                </figure>
                <p class="card-content-body is-centered">{{ pet.description.substring(0,50)+".." }}</p>
              </div>
              <footer class="card-footer flex">
                <nuxt-link :to="`/pet/modify/${pet._id}`" class="card-footer-item">
                  <button class="button is-link">Edit {{ pet.name }}</button>
                </nuxt-link>
                
                <nuxt-link :to="`/`" class="card-footer-item">
                <button class="button is-danger" @click="deleteData({params:{id:pet._id}})">Delete {{ pet.name }}</button>
                </nuxt-link>
                <nuxt-link :to="`/pet/${pet._id}`" class="card-footer-item">
                  <button class="button is-dark">Read more about {{ pet.name }}</button>
                </nuxt-link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  },
  async asyncData(context) {
    try {
      return await fetch("http://localhost:9000/api/pets")
        .then(res => res.json())
        .then(data => {
          return { pets: data };
        });
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
  },
  methods:{
    async getPets(){
      try {
      const res=await fetch("http://localhost:9000/api/pets")
      const data=await res.json();
      return data;
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
    },
  async deleteData({ params }) {
    
    this.$confirm("Do you really want to delete this item ?", "Confirm", 'question').then(async () => {
      try {
        let res = await fetch(`http://localhost:9000/api/pet/${params.id}`,{method:"DELETE",})
        const data =  res.json();
        this.$alert("Deleted", "Success, please refresh the page", 'success');
        this.pets=this.getPets();
        return data;
      } catch (e) {
      
        console.error("SOMETHING WENT WRONG :" + e);
        return { pet: {} };
      }
});
    },
    },
  data() {
    return {
      pets: []
    };
  }
};

</script>
