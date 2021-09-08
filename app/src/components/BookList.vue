<template>
  <div>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>BookName</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.price ?  item.price : '-'}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "BookList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getBooks();
  },

  methods: {
    // Get All Books
    async getBooks() {
      try {
        const response = await axios.get("/books");
        this.items = response.data.items;
      } catch (err) {
        console.log(err);
        for(let key of Object.keys(err)) {
          console.log(key);
          console.log(err[key]);
        }
      }
    },
  },
};
</script>

<style>
</style>
