import React from 'react'
import '../css/Main.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import Consults from './Consults';

function Main() {
    return (
        <Container maxWidth="lg" className="main-box">
            <Grid container id="navbar">
                <img className="main-image" src="https://images.pexels.com/photos/4195335/pexels-photo-4195335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>          
                <Grid id="audio" item xs={12} lg={6}>
                    <Product id="111" content="Lorem, ipsum dolor sit amet consectetur ita ut optio quia repellendus! Odit consequuntur laudantium asperiores voluptate tempore, non ut vitae autem fuga tenetur vel atque, excepturi cum sed porro!" price={70} titulo='Headphones' imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy86qoY4qS3ZLkkpKjQdafWCnf_NLhOGbRaA&usqp=CAU"/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Product id="222" content="Lorem, ipsum dolor sit amet consectetur ita ut optio quia repellendus! Odit consequuntur laudantium asperiores voluptate tempore, non ut vitae autem fuga tenetur vel atque, excepturi cum sed porro!" price={90} titulo='Amps' imagen="https://static.wixstatic.com/media/695971_b84e203e11cc4390876df61f6c74ed35~mv2.png/v1/fill/w_1356,h_638,al_c,q_95,usm_0.66_1.00_0.01/695971_b84e203e11cc4390876df61f6c74ed35~mv2.webp" />
                </Grid>
                <Grid id="accesories" item xs={12} lg={4}>
                    <Product id="333" content="Lorem, ipsum dolor sit amet consectetur ita ut optio quia repellendus! Odit consequuntur laudantium asperiores voluptate tempore, non ut vitae autem fuga tenetur vel atque, excepturi cum sed porro!" price={65} titulo='Airpods' imagen="data:image/jpeg;base64,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"/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Product id="444" content="Lorem, ipsum dolor sit amet consectetur ita ut optio quia repellendus! Odit consequuntur laudantium asperiores voluptate tempore, non ut vitae autem fuga tenetur vel atque, excepturi cum sed porro!" price={110} titulo='Radios' imagen="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFhUVFRUVGBUVFxgXGBUVFRUWGBUXFRgYHSggGBomHRUWITEhJSkrLy4uFx8zODMsNygtLisBCgoKDg0OFRAPFysdFRkrLSstKy0tKzErLystLS0tKzctLS0tLS03KzI3Ky01LS0tLSsrLTctLTgrKysrNy0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xABOEAABAwEEBQcHCQUFBwUAAAABAAIDEQQSITEFQVFhcQYTIjKBkbEHI1JyocHRFDNCgpKywuHwFTRDYnMkU6Oz8USTlKLS0+NFY2RldP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAQEBAQEBAAAAAAAAAAAAAAARAWFBEv/aAAwDAQACEQMRAD8A9xREQFgtlqbE0vdWg2Ak9wWdamk7CJmFhe9l5rmksNDdcKOH55jUQgzWa0NkaHsNWnI/kcQdyyqLs9hdZmhsPSjaABEcLoHoHVwy2UW3Zrcx5oDR1K3HCjthwOeIOVUGyiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC1bbYWSDpDEYhwzB2g9y2kQRQtEsOEgL2ZB46w9YfS1b881IwTteA5jg4HWFeRXBRNu0Ua34TcdicMyTnWuDhuNONMCEuiiLHpcg3Jxddle+iT25H3CtAKKWBriEFUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBgtdjZIKPFdVdf5jccMFCWhs1lFWEvZWuJGAoc72utMS4DrEuGDV0SIIzRmm45sK3XA0LTUUJFQKGhBoQaEA41yxUmoHTHJpknTiPNvAIFMBjjQYGgrjQhza4lrjRRQ5QyWV/N2it1raueRRraUqXZuawVHnOkzA1LMAg7NFrWO2skALTmK03HIimBG8LZQEREBERAREQEREBERAREQEREBERAREQERRem9MR2dt6Q1JrdjHWfTPgN5w8EEiZNgr4d/wAFgnkd6bGcQXe8KA0Z8otnnJXGKHUyMlpf9brU34V1AZrorPZI48GMa3gAK8TrQaTopzlaB/u2/Eq3m7SP4zTxb8ApMxjYO5DE30R3BBGVtQ+lEeN74Knyi1D6MR4V95UnzLdndh4JzDd/efigi/l1pGcTDwcB4uWvb5XStuyWW9Q1BEgDmn0mOaatdniDVTRszd/efirDYxtPs+CDhYNDTQuLoC6MXr3Nlocw1NXGjC0NfnR0dzOrg84rpLLpaVopJC92whpr24UPHBSZ0ePSd/y/9KxyaONOi+h1Xm17wCKoMH7c2wS/ZVf26zXHKPqj4rmNLaStdlI5+JhZgOdjDrriTQXavwdl0HUxIDS8qV0NpCO0NqJQDW6cDQOGbXAmrHfyuoeKCT/b8etrxxA+KqNPw7Xdyyfs5394e781adHP/vPFAGnYPSP2XfBXDTUHp/8AK74LCdGP9Me1Y3aKk9JvbX4INwaXh/vB3H4K8aTh/vG96jDoiX/2z+vVWtaNEzUwjY71boPeaIOjina7qua7gQfBZFwVpicw4tLTqrVv2Sc+xbej9PSNwJvgZtf1gOOfbiEHZItTR+kGTCrTiM2nMflvW2gIiICIiAiIg1NKW5kET5X9Vgqdp2NG8mgHFee6HifpC1X5cus6mTWA4MbuqadpK3PKppIjmLODg4ulfwZRrAd1S4/UCkfJtZ6QySa3Pu9jAPe49yDr2NAAAFABQAZADIBVREBERAREQEREBERBa9gIIIBBFCDiCDmCFxmmeQ9Hc9YH8zIABcyYWtrRjTQhrf5HBzAK3Qwm8u1RB53ovls+zv5i3xmFzadNwIjIoMTieaFTStXx6g+tQO9strZIKtOqtNx17xvGCwaW0TDaWc3MwOGNDiHMJBF5j20cx1CRUEHFefWjk1btFuMlhcZ7MKuNnI6TR/I1uRzxjpqHNuNXIPT0XKcmOXFntVGXrkuIMbqB9WmjrtMH0OBu4jWAuqa4EVBqEFUREFskYcC1wBBzBFQeIK5zTPJoEX4SQ4YhtcR6pPgcDWmWC6VEHnthtbmvp1ZWY0yDhWhcAdVSAWnIkbQu30bbRMwOGBycNh+Cg+WOiiW/KIqCSM3txwpV26hLT/KStTk7pEBzHjBkooQc2mpFDTCrXAtPAoOyREQEREBERB4/5Vpg22McT/CDKbmm94yHuXbeTSUOsLCPTk+8V5N5ebddtzGbIWu+0SPwLoPJry+sVi0WxtonHO85MRE0gvoX1FQTRox1kIPY1G6W0/ZrL8/OyM50J6VNt0Y+xeOcovK7LNVtneyFm1rg6Qj1tXYAd68+tekDIS5zy4nEkmpJ3k5oPo5nlC0Yf9sYPWD2/eaFnZy50af/AFCzDjMxviQvl5zlag+r4OUlif1LZZ3erNGfBy3o7bG7qyMPBwPgV8hUVpjbraO4IPsYIvj6F9zqVb6uHgt2LTNob1bRMOEsg8HIPrRF8qxcqbc3K22r/iJSO4uot2Pl7pJuVtl7S133gUH06i+a2eUvSg/213AxQHxjW5F5WdJjOWN3rRN/DRB9EIvA2eV7SY/h2c8YZfdKEt3ljtr4pIzDCxz43tD2c41zC5pAc2rjiK1CD0bl5ye0dOC+eeKyz4ETGRjDeFLpe0uF44YHBwGTguG0Zy9tOj5eZnljtkP0ZoZGvfdrrNenqwdddsc7NeTutdKmmJqSTQ1JzJyWB2lXbB3fmg+r9A8r7JaqCOZl8/QLgHfZPSB3EcKqfXxgNIvqDWmvDChGRBGIXsfJ7yw80Ls8MkjRShbcvEUFTRzhdx1VI9XJB7Yi4GLyvaNObpm8Yifu1WxH5V9FHO0uHGCfxEdEHaSMBBBFQQQRuK84gjMUk8J+g8ObwfVrqbhcYeMhXa6G5R2S11+TWmKUjEta4Xmja5nWHaFynKRl23uI+nBSm+8xx/y/FB3Fimvxsf6TQe2mKzqM5NurZ2fW++5SaAiIgIij+UNtMFltEwzihlkHFjHOHgg8F8qF3SGlXiz4iCNkD5HdQOY55cRTPFxaBmSx1MBVRTORkVOnLI47W3WD7JDj7VJ8nILlnYczJ51xOJJf1ak/yBg412qSWsxK5d/ImE5SyDiGu8A1a7uQw1Wj/B/8i7BUKTCuLdyHd9GdvawjwJWB3I+0DKWL7Un/AG13SsKTErhH8lrUMnMPB5/EAsB0DbB9D/EiP4l35KsJSFcA7RNsH8MngWHwKxGy2oZwy/7t3uC9CKoVPla87cJxnE4cY3hYTbXDMD2jxXozlY552nvSFeefL9w7/wAlcLdu9q7tzAcwDxFVgfYYjnFGfqN+CQrjPlrdh7h8VR9paRTEdnwXYHRcJ/hM+yB4LE7QlnP8IdjnjwckK4tz947j8Fiubx+uK7V2gLP6B+073lYX8m4NRkHBw97SpCuSbHvHeFKQPaAAHDDeFKnkzFqfJ3t/6VhfyWbqmI4sB/EEhWqXLBJKtmfkzI3GN4cdnUPZiR3kKOEjmuLJAQRgajEcRrG/xRWxZrUWva9jnMe01a5pLXNO1rhiDwXr/JfTs1sEMlocHyNjlYXUALg00BdTC90sxTJeK2phbivRfJTa7zrmyOc9z4B+JB75ya/dmfX++5SijOTn7uz6/wB9yk0BERAURywZesFsbtstoHfE9S60dOsvWacbYZR3scg8G0If7ND/AEYvuNW6o/QBrZof6YH2at9y31plUrDLOG5ns1rHbLTdwHW8FjhsoAMkpoAC411ACpLuxUPlLndVqr5z9UVXWkuB5poumK+yVx82XHJpGYwoVhkleHEOmjaRBecwAG4/XLUmpjGVDuUF952sK4Gq1o3vPN+cjeDHVxyc91BRzAMA3H2rDHbfmxIObkkDiI63uriekBTLHtQb6oVWGQO6LsDqSZhGBVRhcsZV7ljKKoVaqlUQVVEQoKKhV9w0rQ020wzpnxIVhQUREQFE8orAHxmQDpxitdrRi4H2n/VSyo8VBG4+Cg4lovR7xh2HL39wXaeSH54/0J/82yhcTYT0XcB713PkhFZnf/mnP+PZllp9D8nv3eP6333KRUfoAf2ePgfvFSCAiIgLBb21ikG1jh3tKzq17agjaKIPnLksf7HDwk/z5VIyyBoLjqH+ii+SX7pFu5z/ADpFs6VfRoG0+H+q0yt0fHfcZHascdu3gFllcS9rn1jLXyMjZzguWgFgoXADjQalcITzTWBjXBxDXtcaebd84RtNDksMcraX2edja5kccbIxWEtrG8gnEjfqA2IMM5vBzZAS82fpWRrhSlcS0jXXo1B9yvfG4XrsUTRzAa29nUA0jkphzY3Hv1WmrWFnOEtbHI11pL2mRjmuyOFaip4XdqxSMa6+REZS6Bo5wuAEwoaNqDQE51AGfBBUsoWl0TRdhoZGHqHCrI20rTWFggeRGxzXVhEZLnvvGTKoIw/WpXUo8BrHseLPQVqYWYijTQ0LgfYFjcenWl60NhHpNYanHHLEjj7gss7w1rLuMPN3ude/GpNQDXHI1r2KaskvONuO6wxB2qGtF0nzlXh5ZGYwL7GOGJJwqBlid3ZfZpXtNXXQ4OJaGn6H0a11nEbEG68UNFiK3re0ENkGTh/p7PBaJVFCr7NA57gxoqTkOyp9gKxla1vtwhbfJpTKmddVO2n5KDeleIH1kukMOIJ6JHE5DHM7uCh9Jcq4C4kAnVRgwwFMSaewfnGWLR8ltPOyuLIQeiBm4jO7q4uPADCg6KzaOhjFGRNp/MLxJGRN7Wgj7Jywe4cxdcGkHAhuGIcccxiEg07C83b105dLAV45KfmsMRBNWYXqBzRjQVBbXbX8yud0jybikqWebduxaeLfhRXzp66G02RoZzjHhza0oc8cqbdZphTeMVpLkrPa5rG/m5RVnfhtYfd4LrLN5xt9mLaXq6qHAZ666s1BVDkqKpyVHC2AdF3Ae9eheRmykmWbIMikiOOZfLA7LV1SuB0QK3huHvU9yb0rJY3PMJBqCHNcCW9KhGAIxF0HsWGn1JodlIIwfRr34+9bi0tCEmzQEmp5mOpOs3BVbqAiIgIiIPnLk+27Dd9GSZvdM9NLZt4e9ZNFYc+30LXaW9z6/iVmlm9U8R4UWmWzPGL8bjGKMbI4SlwHNEgA9HWCK9y1mPLjGS5z3Nic8SN6MDy6g6VDSv0gO1ZnuBdE668k3mi7UsAc2pMgrSnRpXaVqjARslLQXsfFzMY80SASaGlW9EUoSPYgpFS8yOrWSFpmljYyrJbwuuN4j0qb/FYZH1a4yX2udCf7M1zSQGk4su5uyGG3LZlFbrGvIiY+MRiGovB+QDZAceiKLCSXMDrrmMET2kuB+UNpgLpxzu134FBjtDhdJcXGPmWtMF29ILxoHOIN6tMDwJrgqyNcGuaTzbI7pZcJLixg6QII3U/WNjpAxrpCLreaZ55wrITSgvtpWoqDx9lQy69rnC8REQZzRuRBILd+e7vQUjF6vNNDWSML+cGBvu13SNmNVrxPDiySMc5eaWOlPRNG7iMauByV7BUwudWV3TpKwUaKjNwBpiMOKxyvqGF5v+d6JhrQCppfochjVBP2N16zkegfz8CVqFbOh/m5eH4StUoM9htPNvD6VpXCpbqpUELj9Jk2u2CKvRDjeI3YyHZXOi6m8KEU7caj3UXMclhW1SuPoyHtMjQf1vTTHVgAAACgAAAGQAyAVFUqrGE5AmmzFVF5tL7t29hSlMMsPgO5YSrrhzocictQzPBWkINPSdhbMwsd9U+i7UVD8jNJPs8xidmCaDLEdZoOqoFajYuiXK8oxzVpjmGFaE8Wmh9lFNXHTyOBJIAAJOAyG4VVCto2bzRkAOD7pNajLKl3DMY1WqUHE6GOLuA9637O3B7triKeqKLQ0J1jhXq4HI461JCSvOZYSSVLaXSS4no0+j8QstPq/Qn7vD/Sj+4FurU0QPMRf0o/uBbaAiIgIiIPneyikttGzSFr8WfBXWxl5p3Y935VVZG3bXpAf/YWo95aVcStYzrUhBfGWX3MII6TKXgAQcKg7KLGwucHcw3mWygyc4QL3Ol4Dg6J20DNVeLjqjL3bFS0taek4Pka50YDBQhhBweBmBkTwQWxyNLiY23g58l+RxwikY2mDX47sFhGYcS5zzARz7B5ula4AEi9XEYYrI95vxiR9HEyhrGXubkFMn1BxAFeNVjiqDECHRuuOHNsxjbShxIFK7ONOIYopQebcHve50Ru4FrH0obzhSjSfesbnGpDbrZ5GtcWvLnMAbRpyw1kYZqsNprzJNoDr18YMoJSAfsXadqpACWta0OEfTa7nC4SDOhaeNeyiguvC84tvN5sXGtd0YnE4tu7dmGSwCgLGdRwBeWMHROoitNpRrg9gIAfC1mRa4yF7DTJ2eR7VmsrXPOBcecIIa4AFgIyKomtHC7A93pE+5vjVaZUhbyGMbENQx7Pia9yjig2bHZw8SbWtvAVzodlDXMDMYkdnJaIHNWt4Otzmdj+mz2tA7V01ntDmG800NKZA58Vz/KCylpbMAQCAHHYA7oPHBwIruTTHRlGuIy/VCD4gLV0fbBKy99IYOGw7RuOY/IrZVRmba3jJ1MKYACgrWgwwx2K20Whz6XqZk1ApWtPgMlaWHYe7j8D3KwoLSuW5aHGIbn+278F1BK5qWA2m1tP8NhAO9rOk7vy7Qpq46Zpo25ecKBtW/RJAANcc8NmpYyt59obzNwHpF95wocM9ZwOTcqHjUrRdkg4nQhF41FR0ajKoriKqSrVhIAFXSmgyHSOArqUXofN3Ae9SFRRwApSo41Ad+JZafW2ivmYv6bPuhbS19HfNR/02fdC2EBERAREQeAaVbS36QH/AMtx+2xh9ywkrc5VWd0WldIBwoJHWaVm9ronBx+00jsWiStYzq2QAihWuKtP69i2CrSg1Y4rtBGQ1t5znihN69jgScMcVqQUYImgOiAc9oj64dmRV2NNZGKkSzYrTEUgjW2nBvnmYSlhN2l449AY4Oyx/RxXmn0pSyYjK7zZ9lWgHfmpM2Y7tvbtWRljrme5BGNgLnAvo5zXOuXaijXCmIriaKdsUAiBe/reG4b1Yy5Hln7e06lgmmLjj2DYgpNIXEk5lYiqlWlBRbZfHJCWSAXhg03a32kHouOvUMTgAKb9RVQc7NDJZXX2EmPUc7o9F41t3qYsmmY3jpG4d56J4Oy76KZs0sTmhkoLaYB4FaDE0IzxJ355DNc9NoRjjWOsbj6GRPqZdgooOlZbasweSaEZNLaZANIxAukjtO0qPkkAFSQAMydXFQ50RKxpZVlSa1c1zDhd2A7u9Xw6LrTnHVcPRx7BeAK1vEzpbbcZPNx1xwrrO5vxyUnojRJDSG0qB0iTQbQwHbmezcsv7FdCwvLLuNDU1dj4DEYYV2HNWtncG3bxu7K9/YcK7aDYFFWKjslVUdkg4bQ+buA96l7U4G9TK/KG+oHG7xww7FE6HzdwHvUlaXkl5yBLy0bnY+JcstPrbR/zUfqM+6FsLDYxSNg2Nb4BZkBERAREQee+Vfk2+UMt1nYXywNcyWNoF6WzON4hu1zHC+Br6Q10XmcE7XtD2ODmnIjLhuO44r6OXAcq/JbZ7S909mldY53GrnRCschrUmSKoBOeIIzJIKI8yLlYSpufyY6ZYTdnskzdVQWE8QIxT7RUbPyP04w42CKQbWStx4Vlr7FaRqkql87VitVh0lF19E2k+pV472RuCj7TpYxCs1mtMXrxUp2uLfBKJTnT+qKjpCdZUPHyis5+m5vrsP4LyzxaXs7spmdt5vteAFUb9VSqwMtcZyljJ2CRlewVWcNJyB7kFCVaVVytqgqitqlUF6Aq2qqg3jpWUscwuq12dQNQAGPAe2udCNIqiIMksznGrnFx2kk+PAKxbmj54m3hLGX1LaUwIAJvY1GfuzC2XS2Q1pG9vGpFK59fB1KjWMBtQRgVHZKQtzbPdrEXXqjA9WlDWlRWtaZnao6ZwDXOOQBJ4AVPgg4fQ+buA9673yd8mnW21saR5qMtklOq401une4inaTqXJ8h9Dy2ucQQtq913g0Y1c46mjb76L6n5K8norDA2GIVOb30xkfrcdg2DUFlpMIiICIiAiIgIiICIiAiIg07VouCXCSCJ/rxtd4hQ9o5BaMfno+zD1Yms+4AukRBwdo8j+iHZWUtr6M03gXkBRFq8hGjnGrJbSzcHxuA+1HX2r1NEHjto8hpHzOlJmDY5l72tkbTuUdaPI3pJo81pCKT+q149tHr3NEHz5N5M9OR5fJptzXNHtLWeKjpeSmm4+vo4EfyPa49lyU+C+lEQfLc0dvj+c0XahTXckA7DzdFoy8oGMN2SKVjvRLRX2kL6yVr2AihAI2HFWkfKUfKGA/Sc31mn8NVsR6XgdlK3tq37wAX0nbOTdjl+dsdnf68MbvFqiLX5N9FSCjrBCK+gDH7YyKJUjwuO1xuwEkZOwPYT3VWyxhOQJ7F6rafIzoh3Vgez1ZpD98lRM3kFsB6lotTeLonAcPNg+1KRwQYdh7lz+m9J85SzWesj5CG+bBdWuTGXes44DCuzXh6uPIPZiRzlttDgNVGV7CQady7bknyCsOjsbPD5ylDNIb8hGujjg2usNACUiO8lHIgaMstZAPlM1HSnA3PRiaRqbrpma4kUXcIiiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k="/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Product id="555" content="Lorem, ipsum dolor sit amet consectetur ita ut optio quia repellendus! Odit consequuntur laudantium asperiores voluptate tempore, non ut vitae autem fuga tenetur vel atque, excepturi cum sed porro!" price={40} titulo='Lights' imagen="https://static.wixstatic.com/media/695971_4c6ff3c2ac7d4ee98d56c9a3af06281c~mv2.jpg/v1/fill/w_451,h_596,al_c,lg_1,q_90/695971_4c6ff3c2ac7d4ee98d56c9a3af06281c~mv2.webp"/>
                </Grid>
                <Grid item xs={12} id="inquiries">
                    <Consults />
                </Grid>
            </Grid>
        </Container >
    )
}

export default Main
