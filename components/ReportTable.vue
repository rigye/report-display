<template>
  <v-container>
    <v-table-field
    label="serach by account holder name"
    v-model="serachQuery"
    @input="onsearch"
    outlined
    clearable
    />
    <v-select
      :items="transactionType"
      label="filter by transaction Type"
      v-model="filterType"
      @change="onfilter"
      outlined
      clearable
      />
      <v-date-table
      :Headers="Headers"
      :items="filteredReports"
      :items-per-page="5"
      />
      <v-btn color="primary" @click="exportToCSV">Export to CSV</v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { usetaskstore1 } from '@/stores/report';

export default defineComponent
</script>

