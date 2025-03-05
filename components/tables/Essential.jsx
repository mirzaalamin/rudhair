const Essential = () => {
  return (
    <div class="overflow-x-auto py-14 bg-primary px-5">
      <table class="min-w-full text-sm text-muted-foreground font-raleway">
        <thead>
          <tr>
            <th class="xl:text-[28px] text-[18px] leading-6 font-light px-4 py-7  border border-primary bg-secondary text-center text-primary">
              Essential Colour
            </th>
            <th class="px-4 py-4 border border-primary bg-secondary text-center text-primary ">
              New Talent Colourist
            </th>
            <th class="px-4 py-4 border border-primary bg-secondary text-center text-primary ">
              Colourist
            </th>
            <th class="px-4 py-4 border border-primary bg-secondary text-center text-primary ">
              Colour Director
            </th>
          </tr>
        </thead>
        <tbody class="bg-card-foreground">
          <tr>
            <td class="border border-primary text-center px-4 py-3">
              Re-Growth (30 mins)
            </td>
            <td class="border border-primary text-center px-4 py-3">£33</td>
            <td class="border border-primary text-center px-4 py-3">£43</td>
            <td class="border border-primary text-center px-4 py-3">£53</td>
          </tr>
          <tr>
            <td class="border border-primary text-center px-4 py-3">
              Full Head Colour (45 mins)
            </td>
            <td class="border border-primary text-center px-4 py-3">£50</td>
            <td class="border border-primary text-center px-4 py-3">£65</td>
            <td class="border border-primary text-center px-4 py-3">£75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Essential;
