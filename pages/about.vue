<template>
    <div>
        <h2>Currencies by country</h2>
        
        <div >
            <table>
                <thead>
                    <th>Flag</th>
                    <th>Country</th>
                    <th>Code</th>
                    <th>Currency</th>
                    <th>Amount($)</th>
                </thead>
                <tbody>
<tr v-for="(d,index) in Object.values(data)" :key="index">
    <td class="px-10 text-center"><img v-if="handleFlag(d.code)" :src="handleFlag(d.code)" class="w-12" /><span v-else class="material-icons text-gray-400">flag</span></td>
    <td class="text-center"><div v-if="handleCountryName(d.code)">{{ handleCountryName(d.code) }}</div><div v-else>No_name</div></td>
    <td class="text-center"><div class="code">{{ d.code }}</div></td>
    <td class="text-center">{{ handleCurrencyName(d.code) }}</td>
    <td class="text-center">{{ d.value }}</td>
</tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup>
    import countries from '../data/countries/countries.json'
    const { data } = await useFetch('/api/ninja')
    const handleFlag = (code ) => {
        // console.log(code);
        const country = countries.find((c)=> c.code === code)
        if (country) {
            return country.flag
        }
        return null
    }
    const handleCountryName = (code ) => {
        // console.log(code);
        const country = countries.find((c)=> c.code === code)
        if (country) {
            return country.country
        }
        return null
    }
    const handleCurrencyName = (code ) => {
        // console.log(code);
        const country = countries.find((c)=> c.code === code)
        if (country) {
            return country.name
        }
        return null
    }
</script>

<style>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
    .code {
        width:120px
    }
</style>